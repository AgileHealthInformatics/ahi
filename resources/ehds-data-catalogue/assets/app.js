/* EHDS Data Catalogue Explorer v1.0.2
   All records and interactions are synthetic and stored only within the visitor's browser.
   Educational metadata checks and simulated federation are NOT official HealthDCAT-AP validation. */
(() => {
  'use strict';
  const KEY = 'ahi-ehds-catalogue-educational-v1';
  const THEME_KEY = 'ahi-ehds-theme';
  const $ = id => document.getElementById(id);
  const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const dateText = stamp => new Date(stamp).toLocaleString('en-GB', {dateStyle:'medium',timeStyle:'short'});
  const now = () => new Date().toISOString();
  const themes = ['Screening','Hospital activity','Public health','Medicines','Rare diseases','Primary care'];
  const starter = [
    {id:'SYN-001',title:'Preventive screening outcomes',provider:'Example Screening Data Partnership',description:'Synthetic records describing screening invitations, attendance and follow-up outcomes. Useful for exploring how a data holder might describe eligibility, population coverage and longitudinal measures.',theme:'Screening',access:'non-public',coverage:'National service population',period:'2019–2025',records:450000,contact:'Example National Data Access Office',variables:[{name:'screening_event_id',type:'string',description:'Synthetic identifier for the screening event'},{name:'invitation_year',type:'integer',description:'Calendar year of invitation'},{name:'age_band',type:'string',description:'Illustrative five-year age band'},{name:'attendance_flag',type:'boolean',description:'Whether the screening event was attended'},{name:'follow_up_status',type:'string',description:'Illustrative follow-up outcome classification'}]},
    {id:'SYN-002',title:'Acute hospital activity and discharge',provider:'Example Hospital Information Collaborative',description:'Aggregated synthetic episode-level metadata spanning admissions, emergency attendances, specialty and discharge destination. The dataset description illustrates coverage, coding standards and restricted access.',theme:'Hospital activity',access:'restricted',coverage:'Multi-region hospital network',period:'2020–2025',records:1900000,contact:'Example Hospital Data Stewardship Team',variables:[{name:'episode_id',type:'string',description:'Synthetic episode identifier'},{name:'admission_month',type:'date',description:'Month of admission'},{name:'service_category',type:'string',description:'Broad inpatient or emergency service classification'},{name:'length_of_stay_days',type:'integer',description:'Hospital stay length in whole days'},{name:'discharge_destination',type:'string',description:'Illustrative discharge category'}]},
    {id:'SYN-003',title:'Population health indicator series',provider:'Example Population Health Observatory',description:'Publicly described synthetic indicators illustrating trends in prevention, health outcomes and service use. The example also shows that some catalogue distributions may describe publicly accessible aggregate information.',theme:'Public health',access:'public',coverage:'National and regional statistical areas',period:'2015–2025',records:24000,contact:'Example Open Statistics Unit',variables:[{name:'indicator_code',type:'string',description:'Synthetic statistical indicator identifier'},{name:'reference_year',type:'integer',description:'Reporting year'},{name:'statistical_area',type:'string',description:'Synthetic regional grouping'},{name:'indicator_value',type:'decimal',description:'Illustrative published aggregate value'}]},
    {id:'SYN-004',title:'Prescribing patterns and medicines use',provider:'Example Medicines Data Service',description:'Synthetic metadata describing anonymised or pseudonymised dispensing activity, medicines classifications and observation periods. Provides a worked example of controlled access and terminology-dependent interpretation.',theme:'Medicines',access:'non-public',coverage:'National community dispensing network',period:'2021–2025',records:2700000,contact:'Example Medicines Information Steward',variables:[{name:'dispensing_event_id',type:'string',description:'Synthetic dispensing event identifier'},{name:'dispensing_year',type:'integer',description:'Year of dispensing'},{name:'medicine_group',type:'string',description:'Broad medicine classification category'},{name:'quantity_band',type:'string',description:'Illustrative quantity grouping'},{name:'age_band',type:'string',description:'Illustrative age category'}]}
  ].map(r=>({...r,status:'published',revision:1,modified:'2026-10-01T00:00:00.000Z',published:'2026-10-01T00:00:00.000Z',synthetic:true}));
  const fresh = () => ({version:1,records:structuredClone(starter),enquiries:[],audit:[{at:'2026-10-01T00:00:00.000Z',event:'Seed catalogue loaded',detail:'Four fictional, published sample dataset descriptions'}],counter:5});
  function load() {
    try {const s=JSON.parse(localStorage.getItem(KEY)); if(s?.version===1 && Array.isArray(s.records) && Array.isArray(s.enquiries) && Array.isArray(s.audit)) return s;} catch (_){}
    return fresh();
  }
  let state=load();
  let selectedId='SYN-001';
  let providerSelection='new';
  let stewardSelection='SYN-001';
  let journeySelection='SYN-001';
  let lastExport=null;
  let journeyProgress=null;
  let lastValidation=null;
  let toastTimeout;
  const published = () => state.records.filter(r=>r.status==='published');
  const byId = id => state.records.find(r=>r.id===id);
  const log = (event,detail) => {state.audit.unshift({at:now(),event,detail});state.audit=state.audit.slice(0,65);};
  const save = () => {try{localStorage.setItem(KEY,JSON.stringify(state));}catch(_){toast('Browser storage is unavailable. Changes may not persist.');}};
  const setText = (id,value) => {const node=$(id); if(node)node.textContent=value;};
  const accessLabel = access => ({'non-public':'Non-public','restricted':'Restricted','public':'Public'})[access]||access;
  const safeField = s => String(s ?? '').trim();
  const sorted = records => [...records].sort((a,b)=>a.id.localeCompare(b.id));
  function toast(message){const node=$('toast');node.textContent=message;node.classList.add('show');clearTimeout(toastTimeout);toastTimeout=setTimeout(()=>node.classList.remove('show'),3500);}
  function setTab(tab){
    const target=$('panel-'+tab);if(!target)return;
    document.querySelectorAll('[data-tab]').forEach(b=>{const active=b.dataset.tab===tab;b.setAttribute('aria-selected',String(active));b.tabIndex=active?0:-1;});
    document.querySelectorAll('.work-panel').forEach(el=>{const active=el===target;el.hidden=!active;el.classList.toggle('active',active);});
    if(location.hash!=='#'+tab)history.replaceState(null,'','#'+tab);
    if(tab==='provider')syncProviderList();
    if(tab==='steward')renderSteward();
    if(tab==='request')renderRequests();
    if(tab==='journey')renderJourneyControls();
  }
  function validate(record){
    const errors=[],warnings=[];
    const required={title:'Dataset title',description:'Dataset description',provider:'Data holder',theme:'Health theme',access:'Access category',coverage:'Geographical coverage',period:'Temporal coverage',contact:'Contact point'};
    Object.entries(required).forEach(([key,name])=>{if(!safeField(record[key]))errors.push({field:key,message:name+' is missing.'});});
    if(record.description && record.description.length<35)errors.push({field:'description',message:'Describe the dataset in at least 35 characters.'});
    if(!themes.includes(record.theme))errors.push({field:'theme',message:'Select a supported educational health theme.'});
    if(!['public','restricted','non-public'].includes(record.access))errors.push({field:'access',message:'Select a valid illustrative access category.'});
    if(!Array.isArray(record.variables)||record.variables.length===0)errors.push({field:'variables',message:'At least one variable description is required.'});
    for(const [i,v] of (record.variables||[]).entries()){
      if(!v.name||!v.type||!v.description)errors.push({field:'variables',message:'Variable '+(i+1)+' must contain a name, type and description.'});
    }
    if(record.records!=='' && record.records!==null && record.records!==undefined && (!Number.isInteger(Number(record.records))||Number(record.records)<0))errors.push({field:'records',message:'Number of records must be a non-negative whole number.'});
    warnings.push('The concepts, controlled vocabulary memberships and full cardinalities of HealthDCAT-AP Release 8 have not been verified.');
    warnings.push('This is a browser-based educational field check, not DCAT-AP or HealthDCAT-AP SHACL validation.');
    return {errors,warnings,passed:errors.length===0,kind:'illustrative-local-check',profile:'Educational subset · HealthDCAT-AP Release 8 concepts',checked:now()};
  }
  function variableRows(variables){return (variables||[]).map(v=>`<tr><td><code>${escapeHTML(v.name)}</code></td><td>${escapeHTML(v.type)}</td><td>${escapeHTML(v.description)}</td></tr>`).join('');}
  function renderFilters(){const filter=$('themeFilter');filter.innerHTML='<option value="all">All themes</option>'+themes.map(x=>`<option value="${escapeHTML(x)}">${escapeHTML(x)}</option>`).join('');}
  function renderCatalogue(){
    const q=$('searchInput').value.trim().toLowerCase(),theme=$('themeFilter').value,access=$('accessFilter').value;
    const items=sorted(published()).filter(r=>{
      const haystack=[r.title,r.description,r.provider,r.theme,r.coverage,...(r.variables||[]).flatMap(v=>[v.name,v.description])].join(' ').toLowerCase();
      return haystack.includes(q)&&(theme==='all'||r.theme===theme)&&(access==='all'||r.access===access);
    });
    setText('resultCount',items.length);
    $('datasetList').innerHTML=items.length?items.map(r=>`<button class="dataset-card" data-record="${escapeHTML(r.id)}" aria-pressed="${r.id===selectedId}"><span class="id">${escapeHTML(r.id)}</span><strong>${escapeHTML(r.title)}</strong><span class="summary">${escapeHTML(r.description.slice(0,126))}${r.description.length>126?'…':''}</span><span class="foot"><span class="chip">${escapeHTML(r.theme)}</span><span class="chip access">${accessLabel(r.access)}</span></span></button>`).join(''):'<div class="empty">No published datasets match those filters. Clear the filters to see the full synthetic catalogue.</div>';
    if(!items.some(r=>r.id===selectedId))selectedId=items[0]?.id||'';
    document.querySelectorAll('.dataset-card').forEach(el=>el.setAttribute('aria-pressed',String(el.dataset.record===selectedId)));
    renderDetail();
  }
  function renderDetail(){
    const r=byId(selectedId),root=$('datasetDetail');
    if(!r||r.status!=='published'){root.innerHTML='<div class="empty">Choose a published dataset to examine its metadata.</div>';return;}
    root.innerHTML=`<div class="hero-detail"><span class="eyebrow">Published synthetic dataset · ${escapeHTML(r.id)}</span><h3>${escapeHTML(r.title)}</h3><div><span class="chip">${escapeHTML(r.theme)}</span> <span class="chip access">${accessLabel(r.access)}</span></div></div>
      <p class="detail-description space-top">${escapeHTML(r.description)}</p>
      <dl class="detail-meta"><div><dt>Fictional data holder</dt><dd>${escapeHTML(r.provider)}</dd></div><div><dt>Geography</dt><dd>${escapeHTML(r.coverage)}</dd></div><div><dt>Time period</dt><dd>${escapeHTML(r.period)}</dd></div><div><dt>Records</dt><dd>${Number.isFinite(Number(r.records))&&r.records!==''?Number(r.records).toLocaleString('en-GB'):'Not specified'}</dd></div><div><dt>Contact function</dt><dd>${escapeHTML(r.contact)}</dd></div><div><dt>Metadata revision</dt><dd>${escapeHTML(r.revision)}</dd></div></dl>
      <div class="section-label">Illustrative variable dictionary (${r.variables.length})</div><div style="overflow-x:auto"><table class="mini-table"><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody>${variableRows(r.variables)}</tbody></table></div>
      <div class="detail-actions"><button class="btn btn-primary" data-enquire="${escapeHTML(r.id)}">Explore access enquiry</button><button class="btn" data-federate="${escapeHTML(r.id)}">View federation</button></div>
      <div class="notice blue">The catalogue describes this dataset; it does not expose patient-level records. This is a fictional record, and its access category has been assigned solely for illustration.</div>`;
  }
  function populateSelect(id,records,selected,empty){const node=$(id);const sortedRecords=sorted(records);node.innerHTML=(empty||'')+sortedRecords.map(r=>`<option value="${escapeHTML(r.id)}">${escapeHTML(r.id)} · ${escapeHTML(r.title)}</option>`).join('');if(sortedRecords.some(r=>r.id===selected))node.value=selected;else if(sortedRecords.length)node.value=sortedRecords[0].id;return node.value;}
  function renderRequests(){
    const options=published();const old=$('requestDataset').value;populateSelect('requestDataset',options,old||selectedId,'');
    const root=$('enquiryList');root.innerHTML=state.enquiries.length?state.enquiries.map(e=>`<div class="request-entry"><strong>${escapeHTML(e.id)} · ${escapeHTML(e.datasetTitle)}</strong><p>${escapeHTML(e.purpose)} · ${dateText(e.at)} · ${escapeHTML(e.status)}</p><p>${escapeHTML(e.narrative)}</p></div>`).join(''):'<div class="empty">No enquiries in this browser yet. Choose a published dataset and create a hypothetical enquiry.</div>';
  }
  function parseVariables(text){
    return String(text||'').split(/\r?\n/).filter(line=>line.trim()).map(line=>{
      const parts=line.split('|');return {name:safeField(parts[0]),type:safeField(parts[1]),description:safeField(parts.slice(2).join('|'))};
    });
  }
  function readProvider(){
    const form=$('providerForm'),val=k=>safeField(form.elements.namedItem(k).value),records=val('records');
    return {title:val('title'),description:val('description'),provider:val('provider'),theme:val('theme'),access:val('access'),coverage:val('coverage'),period:val('period'),records:records===''?'':Number(records),contact:val('contact'),variables:parseVariables(val('variables')),synthetic:true};
  }
  function setForm(record){
    const form=$('providerForm');for(const k of ['title','description','provider','theme','access','coverage','period','contact'])form.elements.namedItem(k).value=record?.[k]??(k==='access'?'non-public':'');
    form.elements.namedItem('records').value=record?.records??'';
    form.elements.namedItem('variables').value=(record?.variables||[]).map(v=>[v.name,v.type,v.description].join(' | ')).join('\n');
    setText('providerState',record?record.status.replaceAll('-',' ')+' · rev '+record.revision:'New draft');
    $('providerFeedback').innerHTML='';
  }
  function syncProviderList(){
    const options=state.records.filter(r=>['draft','returned'].includes(r.status));
    const root=$('providerDataset');root.innerHTML='<option value="new">+ Start a new synthetic record</option>'+sorted(options).map(r=>`<option value="${escapeHTML(r.id)}">${escapeHTML(r.id)} · ${escapeHTML(r.title||'Untitled')} (${r.status})</option>`).join('');
    if(providerSelection!=='new' && !options.some(r=>r.id===providerSelection))providerSelection='new';
    root.value=providerSelection;
  }
  function recordDraft(){
    const input=readProvider();let r;
    if(providerSelection!=='new'){
      r=byId(providerSelection);if(!r||!['draft','returned'].includes(r.status)){toast('Only draft or returned records may be edited.');return null;}
      Object.assign(r,input,{status:'draft',revision:r.revision+1,modified:now()});
      log('Metadata draft revised',r.id+' · revision '+r.revision);
    }else{
      const id='SYN-'+String(state.counter++).padStart(3,'0');
      r={...input,id,status:'draft',revision:1,modified:now()};state.records.push(r);providerSelection=id;log('New synthetic draft created',r.id+' · '+r.title);
    }
    save();syncProviderList();setText('providerState','draft · rev '+r.revision);renderSteward();toast('Draft saved locally in this browser.');
    return r;
  }
  function findingsMarkup(report){
    return `<div class="state-pill">${report.errors.length===0?'No errors in illustrative checks':'Illustrative checks found '+report.errors.length+' error(s)'}</div>
     <ul class="validation-items">${report.errors.map(e=>`<li><span class="issue">Error · ${escapeHTML(e.field)}</span>${escapeHTML(e.message)}</li>`).join('')||'<li><span class="issue ok">Fields complete</span>No errors in this teaching subset.</li>'}</ul>
     <div class="section-label">Validation limits</div><ul class="validation-items">${report.warnings.map(w=>`<li>${escapeHTML(w)}</li>`).join('')}</ul>`;
  }
  function renderProviderReport(r){lastValidation=validate(r);$('providerFeedback').innerHTML='<div class="notice blue"><strong>Educational metadata check</strong>'+findingsMarkup(lastValidation)+'</div>';}
  function renderSteward(){
    const options=state.records.filter(r=>r.status!=='draft');
    stewardSelection=populateSelect('stewardDataset',options,stewardSelection);
    const r=byId(stewardSelection);
    $('stewardDetail').innerHTML=r?`<div class="notice blue"><strong>${escapeHTML(r.title||'Untitled')}</strong><p><span class="chip">${escapeHTML(r.status)}</span> <span class="chip">rev ${escapeHTML(r.revision)}</span> <span class="chip">${escapeHTML(r.theme)}</span></p><p class="micro">${escapeHTML(r.provider)} · ${escapeHTML(r.id)}</p></div>`:'<div class="empty">No records submitted yet. Try the provider workspace.</div>';
    $('validationFindings').innerHTML=r?findingsMarkup(validate(r)):'<div class="empty">Choose a record.</div>';
    $('stewardPublish').disabled=!r||r.status!=='submitted'||!validate(r).passed;
    $('stewardReturn').disabled=!r||r.status!=='submitted';
    $('stewardValidate').disabled=!r;
    $('auditTrail').innerHTML=state.audit.map(a=>`<div class="timeline-entry"><strong>${escapeHTML(a.event)}</strong><small>${dateText(a.at)}</small><p>${escapeHTML(a.detail)}</p></div>`).join('');
  }
  function renderJourneyControls(){
    journeySelection=populateSelect('journeyDataset',published(),journeySelection);$('runJourney').disabled=!journeySelection;
    if(journeyProgress&&journeyProgress.record.id!==journeySelection)resetJourney();
  }
  function quoteRdf(s){return '"'+String(s??'').replace(/\\/g,'\\\\').replace(/"/g,'\\"').replace(/\n/g,'\\n').replace(/\r/g,'\\r')+'"';}
  const uriFor = id => 'https://example.org/ehds-catalogue-education/datasets/'+encodeURIComponent(id);
  function makeRdf(r){
    const uri=uriFor(r.id);const qs=quoteRdf;
    const props=[`  dct:identifier ${qs(r.id)} ;`,`  dct:title ${qs(r.title)}@en ;`,`  dct:description ${qs(r.description)}@en ;`,`  dct:publisher <${uri}/holder> ;`,`  dcat:theme <${uri}/theme> ;`,`  dct:spatial ${qs(r.coverage)} ;`,`  dct:temporal [ a dct:PeriodOfTime ; rdfs:label ${qs(r.period)}@en ] ;`,`  dct:accessRights [ a dct:RightsStatement ; rdfs:label ${qs(r.access)}@en ] ;`,`  dcat:contactPoint [ a vcard:Kind ; vcard:fn ${qs(r.contact)} ] ;`,`  health:hasStructuredData "true"^^xsd:boolean ;`,`  dct:modified ${qs(r.modified.slice(0,10))}^^xsd:date ;`,`  dcat:distribution <${uri}/distribution> .`];
    const variables=(r.variables||[]).map((v,i)=>`<${uri}/variable/${i+1}> a csvw:Column ;\n  csvw:name ${qs(v.name)} ;\n  dct:description ${qs(v.description)}@en ;\n  csvw:datatype ${qs(v.type)} .`).join('\n\n');
    return `# SYNTHETIC EDUCATIONAL RDF, NOT VALIDATED HEALTHDCAT-AP.\n# The example.org URIs are placeholders, not production identifiers.\n@prefix dcat: <http://www.w3.org/ns/dcat#> .\n@prefix dct: <http://purl.org/dc/terms/> .\n@prefix foaf: <http://xmlns.com/foaf/0.1/> .\n@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .\n@prefix vcard: <http://www.w3.org/2006/vcard/ns#> .\n@prefix csvw: <http://www.w3.org/ns/csvw#> .\n@prefix health: <http://healthdataportal.eu/ns/health#> .\n@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .\n\n<https://example.org/ehds-catalogue-education/catalogue> a dcat:Catalog ;\n  dct:title "Synthetic national health dataset catalogue"@en ;\n  dcat:dataset <${uri}> .\n\n<${uri}/record> a dcat:CatalogRecord ;\n  dct:title ${qs(r.title+' catalogue record')}@en ;\n  foaf:primaryTopic <${uri}> .\n\n<${uri}> a dcat:Dataset ;\n${props.join('\n')}\n\n<${uri}/holder> a foaf:Agent ;\n  foaf:name ${qs(r.provider)} .\n\n<${uri}/theme> a <http://www.w3.org/2004/02/skos/core#Concept> ;\n  rdfs:label ${qs(r.theme)}@en .\n\n<${uri}/distribution> a dcat:Distribution ;\n  dct:title "Illustrative access pathway (no actual data endpoint)"@en ;\n  dct:description "This synthetic distribution exposes no health data and provides no access service."@en .\n\n${variables}\n`;
  }
  async function sha256(value){
    if(!globalThis.crypto?.subtle)return null;
    const dig=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(value));
    return Array.from(new Uint8Array(dig)).map(v=>v.toString(16).padStart(2,'0')).join('');
  }
  function download(name,content,type){const blob=new Blob([content],{type});const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);}
  /* The six stages are intentionally user-controlled. No simulated receipt exists until stage 6. */
  const journeyNames=['Data holder','Local metadata checks','National review','National catalogue','Federation outbox','Simulated HealthData@EU receiver'];
  const journeyEvents=[
    'Provider metadata prepared',
    'Educational field checks performed',
    'Previously recorded local publication reviewed',
    'National catalogue description located',
    'Illustrative RDF and manifest staged',
    'Synthetic receiver receipt generated'
  ];
  function evidenceRow(label,value,code=false){
    return `<div class="evidence-line"><strong>${escapeHTML(label)}</strong><span>${code?`<code>${escapeHTML(value)}</code>`:escapeHTML(value)}</span></div>`;
  }
  function renderJourneyStage(){
    const j=journeyProgress;
    if(!j)return;
    const r=j.record,stage=j.stage;
    setText('journeyState',`Stage ${stage+1} of 6`);
    setText('journeyInstruction',`${journeyNames[stage]} · ${stage<5?'Choose Next stage to continue.':'Journey complete. The acknowledgement below is simulated.'}`);
    document.querySelectorAll('.journey-step').forEach((node,i)=>{
      node.classList.toggle('complete',i<j.furthest);
      node.classList.toggle('current',i===stage);
      if(i===stage)node.setAttribute('aria-current','step');else node.removeAttribute('aria-current');
    });
    $('runJourney').textContent='Restart journey';
    $('prevJourney').disabled=stage===0;
    $('nextJourney').disabled=stage===5||(stage===1&&!j.validation?.passed);
    $('nextJourney').textContent=stage===4?'Generate simulated receipt →':'Next stage →';
    $('downloadRdf').disabled=stage<4||!lastExport?.rdf;
    $('downloadEvidence').disabled=stage!==5||!lastExport?.receipt;
    let rows='';
    if(stage===0){
      rows=evidenceRow('Dataset',r.title)+evidenceRow('Identifier',r.id)+evidenceRow('Data holder',r.provider)+evidenceRow('Record revision',String(r.revision))+evidenceRow('Status','Synthetic metadata already published for this example');
      rows+='<div class="notice blue"><strong>Stage 1:</strong> A provider describes the dataset, not patient-level records. This example begins with an already published synthetic catalogue description.</div>';
    }else if(stage===1){
      const report=j.validation;
      rows=evidenceRow('Dataset',r.id)+evidenceRow('Field check outcome',report.passed?'Pass (educational subset)':'Failed field checks')+evidenceRow('Errors',String(report.errors.length))+evidenceRow('Warnings',String(report.warnings.length));
      if(report.errors.length)rows+=`<ul class="validation-items">${report.errors.map(e=>`<li><strong>${escapeHTML(e.field)}:</strong> ${escapeHTML(e.message)}</li>`).join('')}</ul>`;
      rows+='<div class="notice amber"><strong>Not SHACL validation:</strong> this checks a limited set of local fields. The official HealthDCAT-AP constraints and controlled vocabularies are not verified.</div>';
    }else if(stage===2){
      rows=evidenceRow('Dataset',r.id+' · rev '+r.revision)+evidenceRow('Stewardship status','Published in this browser demonstration')+evidenceRow('Publication date',r.published?dateText(r.published):'Not recorded')+evidenceRow('Decision source','Synthetic seed or local steward action');
      rows+='<div class="notice blue"><strong>Stage 3:</strong> The demonstration inspects an earlier publication decision. It does not manufacture a fresh approval or represent an authorised national steward.</div>';
    }else if(stage===3){
      rows=evidenceRow('Dataset',r.id)+evidenceRow('National catalogue','Synthetic browser catalogue')+evidenceRow('Access classification',accessLabel(r.access))+evidenceRow('Catalogue record',uriFor(r.id)+'/record',true);
      rows+='<div class="notice blue"><strong>Stage 4:</strong> Dataset metadata can be discovered, but access to the underlying data is a separate governed process.</div>';
    }else if(stage===4){
      rows=evidenceRow('Dataset',r.id+' · rev '+r.revision)+evidenceRow('Package status','Staged locally in this browser')+evidenceRow('Format','Turtle (illustrative RDF)')+evidenceRow('Record URI',j.manifest.recordUri,true)+evidenceRow('Payload SHA-256',j.manifest.sha256||'Web Crypto unavailable',true);
      rows+='<div class="notice amber"><strong>Stage 5:</strong> This is a locally generated outbox package, not a HealthData@EU transmission. The RDF is illustrative and has not passed the official SHACL profile.</div>';
    }else{
      const receipt=j.receipt;
      rows=evidenceRow('Dataset',r.id+' · rev '+r.revision)+evidenceRow('Field checks',`Educational subset (${j.validation.errors.length} errors; ${j.validation.warnings.length} warnings)`)+evidenceRow('Payload SHA-256',j.manifest.sha256||'Web Crypto unavailable',true)+evidenceRow('Receiver','Local simulation only')+evidenceRow('Response',receipt.status)+evidenceRow('Receipt ID',receipt.id)+evidenceRow('Payload comparison',j.manifest.sha256?'Receipt and outbox contain the same digest':'Digest unavailable; equality not verified');
      rows+='<div class="notice amber"><strong>Not an EU acceptance:</strong> this receipt was generated locally, not returned by the operational HealthData@EU infrastructure.</div>';
    }
    $('journeyEvidence').innerHTML=rows;
    setText('rdfPreview',stage>=4&&lastExport?.rdf?lastExport.rdf:`# Stage ${stage+1} of 6: ${journeyNames[stage]}\n# The illustrative RDF payload is generated at stage 5.`);
  }
  function runJourney(){
    const r=byId($('journeyDataset').value);
    if(!r||r.status!=='published'){toast('Choose a published dataset.');return;}
    lastExport=null;
    journeyProgress={record:structuredClone(r),stage:0,furthest:0,validation:null,manifest:null,receipt:null,events:[journeyEvents[0]]};
    renderJourneyStage();
    toast('Journey started at stage 1. Use Next stage to follow each transition.');
  }
  async function nextJourney(){
    const j=journeyProgress;
    if(!j||j.busy||j.stage>=5)return;
    j.busy=true;
    $('nextJourney').disabled=true;
    try{
      const target=j.stage+1;
      if(target>j.furthest){
        if(target===1){j.validation=validate(j.record);}
        if(target===2&&!j.validation?.passed){toast('The metadata contains field-check errors.');return;}
        if(target===4){
          const rdf=makeRdf(j.record),hash=await sha256(rdf);
          if(journeyProgress!==j)return; // Ignore an obsolete export if the visitor restarted during hashing.
          j.manifest={kind:'synthetic-federation-outbox',datasetId:j.record.id,revision:j.record.revision,recordUri:uriFor(j.record.id),sha256:hash,hashAlgorithm:hash?'SHA-256':null,profileClaim:'No formal conformance claim',validationKind:j.validation.kind,receiver:'Browser simulation',exportedAt:now()};
          lastExport={rdf,manifest:j.manifest,validation:j.validation,receipt:null,events:[]};
        }
        if(target===5){
          if(!lastExport?.manifest){toast('The local outbox has not been prepared.');return;}
          j.receipt={id:'SIM-'+Math.random().toString(36).slice(2,10).toUpperCase(),status:'SIMULATED_ACKNOWLEDGEMENT',payloadSha256:j.manifest.sha256,generatedAt:now(),realEuSubmission:false};
          lastExport.receipt=j.receipt;
        }
        j.events.push(journeyEvents[target]);
        j.furthest=target;
        if(lastExport)lastExport.events=[...j.events];
      }
      j.stage=target;
      renderJourneyStage();
      if(target===5)toast('All six stages complete. Receipt generated locally only.');
    }finally{j.busy=false;if(journeyProgress===j)renderJourneyStage();}
  }
  function previousJourney(){
    if(!journeyProgress||journeyProgress.busy||journeyProgress.stage===0)return;
    journeyProgress.stage--;
    renderJourneyStage();
  }
  function bind(){
    document.querySelectorAll('[data-tab]').forEach(b=>b.addEventListener('click',()=>setTab(b.dataset.tab)));
    document.querySelectorAll('[data-go]').forEach(b=>b.addEventListener('click',()=>{setTab(b.dataset.go);$('main').scrollIntoView({behavior:'smooth',block:'start'});}));
    $('menuToggle').addEventListener('click',()=>{const nav=$('siteNav');const open=nav.classList.toggle('open');$('menuToggle').setAttribute('aria-expanded',String(open));});
    $('themeToggle').addEventListener('click',()=>{const dark=document.documentElement.dataset.theme!=='dark';document.documentElement.dataset.theme=dark?'dark':'light';$('themeToggle').setAttribute('aria-pressed',String(dark));try{localStorage.setItem(THEME_KEY,dark?'dark':'light');}catch(_){}});
    $('resetDemo').addEventListener('click',()=>{if(!confirm('Reset all synthetic records, local enquiries and browser-only decisions? This cannot be undone.'))return;state=fresh();providerSelection='new';selectedId='SYN-001';journeySelection='SYN-001';stewardSelection='SYN-001';lastExport=null;save();resetJourney();syncProviderList();setForm(null);renderAll();toast('Demonstration reset.');});
    ['searchInput','themeFilter','accessFilter'].forEach(id=>$(id).addEventListener(id==='searchInput'?'input':'change',renderCatalogue));
    $('clearFilters').addEventListener('click',()=>{$('searchInput').value='';$('themeFilter').value='all';$('accessFilter').value='all';renderCatalogue();});
    $('datasetList').addEventListener('click',e=>{const target=e.target.closest('[data-record]');if(!target)return;selectedId=target.dataset.record;renderCatalogue();});
    $('datasetDetail').addEventListener('click',e=>{
      const enquire=e.target.closest('[data-enquire]'),federate=e.target.closest('[data-federate]');
      if(enquire){setTab('request');$('requestDataset').value=enquire.dataset.enquire;}
      if(federate){setTab('journey');$('journeyDataset').value=federate.dataset.federate;journeySelection=federate.dataset.federate;resetJourney();}
    });
    $('requestForm').addEventListener('submit',e=>{e.preventDefault();const r=byId($('requestDataset').value);if(!r||r.status!=='published')return;const purpose=$('requestPurpose').value,narrative=$('requestNarrative').value.trim();if(!purpose||narrative.length<12){toast('Choose a purpose and describe the proposed use in at least 12 characters.');return;}state.enquiries.unshift({id:'ENQ-'+String(state.enquiries.length+1).padStart(3,'0'),datasetId:r.id,datasetTitle:r.title,purpose,narrative,status:'Local simulation · Not submitted',at:now()});log('Simulated enquiry prepared',r.id+' · '+purpose);save();$('requestNarrative').value='';$('requestPurpose').value='';renderRequests();toast('Enquiry saved locally. No request was submitted.');});
    $('clearEnquiries').addEventListener('click',()=>{state.enquiries=[];save();renderRequests();toast('Local enquiries cleared.');});
    $('providerDataset').addEventListener('change',()=>{providerSelection=$('providerDataset').value;setForm(providerSelection==='new'?null:byId(providerSelection));});
    $('providerForm').addEventListener('submit',e=>{e.preventDefault();const r=recordDraft();if(r)renderProviderReport(r);});
    $('providerValidate').addEventListener('click',()=>renderProviderReport(readProvider()));
    $('providerSubmit').addEventListener('click',()=>{const formData=readProvider(),report=validate(formData);renderProviderReport(formData);if(!report.passed){toast('Correct the highlighted metadata errors before submitting.');return;}const r=recordDraft();if(!r)return;r.status='submitted';r.modified=now();log('Provider metadata submitted',r.id+' · revision '+r.revision);save();syncProviderList();providerSelection='new';setForm(null);renderSteward();toast('Submission entered the local stewardship queue.');});
    $('stewardDataset').addEventListener('change',()=>{stewardSelection=$('stewardDataset').value;renderSteward();});
    $('stewardValidate').addEventListener('click',()=>{const r=byId(stewardSelection);if(!r)return;const report=validate(r);$('validationFindings').innerHTML=findingsMarkup(report);log('Educational metadata checks performed',r.id+' · '+report.errors.length+' errors');save();renderSteward();toast('Educational metadata checks completed.');});
    $('stewardReturn').addEventListener('click',()=>{const r=byId(stewardSelection);if(!r||r.status!=='submitted')return;r.status='returned';r.modified=now();log('Steward returned metadata for correction',r.id);save();providerSelection=r.id;renderAll();setForm(r);toast('Record returned to provider for correction.');});
    $('stewardPublish').addEventListener('click',()=>{const r=byId(stewardSelection);if(!r||r.status!=='submitted'||!validate(r).passed){toast('Record must be submitted and pass educational checks.');return;}r.status='published';r.published=now();r.modified=now();log('Local steward publication simulated',r.id+' · revision '+r.revision);save();renderAll();toast('Synthetic metadata published in this browser.');});
    $('journeyDataset').addEventListener('change',()=>{journeySelection=$('journeyDataset').value;resetJourney();});
    $('runJourney').addEventListener('click',runJourney);
    $('nextJourney').addEventListener('click',nextJourney);
    $('prevJourney').addEventListener('click',previousJourney);
    $('downloadRdf').addEventListener('click',()=>{if(journeyProgress?.stage>=4&&lastExport?.rdf)download('synthetic-'+lastExport.manifest.datasetId+'.ttl',lastExport.rdf,'text/turtle;charset=utf-8');});
    $('downloadEvidence').addEventListener('click',()=>{if(journeyProgress?.stage===5&&lastExport?.receipt)download('synthetic-federation-evidence-'+lastExport.manifest.datasetId+'.json',JSON.stringify({...lastExport,disclaimer:'This is an educational browser simulation, not official SHACL validation or a real HealthData@EU acknowledgement.'},null,2),'application/json;charset=utf-8');});
    window.addEventListener('hashchange',()=>setTab(location.hash.slice(1)||'explore'));
    document.querySelector('[role="tablist"]').addEventListener('keydown',e=>{if(!['ArrowLeft','ArrowRight','Home','End'].includes(e.key))return;const list=[...document.querySelectorAll('[data-tab]')],i=list.indexOf(document.activeElement);if(i<0)return;e.preventDefault();const next=e.key==='Home'?0:e.key==='End'?list.length-1:(i+(e.key==='ArrowRight'?1:-1)+list.length)%list.length;list[next].focus();setTab(list[next].dataset.tab);});
  }
  function resetJourney(){journeyProgress=null;lastExport=null;document.querySelectorAll('.journey-step').forEach(step=>{step.classList.remove('complete','current');step.removeAttribute('aria-current');});setText('journeyState','Not started');setText('journeyInstruction','Start the journey, then use Next stage to reveal each transition.');setText('rdfPreview','# Select a dataset, then start the guided journey.');$('journeyEvidence').innerHTML='<p class="muted">Choose a published synthetic record and start the journey to inspect each stage in turn.</p>';$('runJourney').textContent='Start guided journey';$('prevJourney').disabled=true;$('nextJourney').disabled=true;$('nextJourney').textContent='Next stage →';$('downloadEvidence').disabled=true;$('downloadRdf').disabled=true;}
  function renderAll(){renderCatalogue();renderRequests();renderSteward();renderJourneyControls();syncProviderList();}
  function init(){
    try{const t=localStorage.getItem(THEME_KEY);if(t==='dark'||t==='light')document.documentElement.dataset.theme=t;}catch(_){}
    $('themeToggle').setAttribute('aria-pressed',String(document.documentElement.dataset.theme==='dark'));
    renderFilters();setForm(null);bind();resetJourney();renderAll();setTab(['explore','request','provider','steward','journey','standards'].includes(location.hash.slice(1))?location.hash.slice(1):'explore');
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
