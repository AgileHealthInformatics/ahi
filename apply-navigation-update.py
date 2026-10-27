#!/usr/bin/env python3
"""Insert bowel cancer and diabetic eye screening navigator links into existing AHI pages."""
from pathlib import Path
import sys, re
HOME_CARDS = '<a class="card card-link" href="/resources/clinical-pathways/bowel-cancer-screening/"><span class="resource-kicker">Clinical pathway navigator · Screening</span><h3>Bowel Cancer Screening</h3><p>Explore 53 draft pathway families covering eligibility, FIT testing, specialist assessment, colonoscopy, histopathology, surveillance and programme assurance.</p><div class="tags"><span>Screening</span><span>FIT</span><span>Clinical pathways</span></div><span class="action">Explore the pathway navigator →</span></a>\n<a class="card card-link" href="/resources/clinical-pathways/diabetic-eye-screening/"><span class="resource-kicker">Clinical pathway navigator · Screening</span><h3>Diabetic Eye Screening</h3><p>Explore 44 draft pathway families covering eligibility, retinal imaging and grading, recall, surveillance, referral to hospital eye services and programme assurance.</p><div class="tags"><span>Screening</span><span>Retinal imaging</span><span>Clinical pathways</span></div><span class="action">Explore the pathway navigator →</span></a>\n'
COLLECTION_CARD = '<article class="card resource-card" data-search="clinical pathways collection acute admission discharge cardiology child youth mental health endoscopy frailty neighbourhood care maternity medicines reconciliation transfer theatres perioperative surgery bowel cancer screening FIT diabetic eye screening retinal imaging healthcare pathway description standard hpds clinical pathways catalogue service design" data-type="collection"><div class="type">Subject collection</div><h3>Clinical Pathways</h3><p>Explore pathway navigators, including bowel cancer and diabetic eye screening, reference catalogues and the Healthcare Pathway Description Standard through a dedicated subject collection.</p><div class="tags"><span>Clinical pathways</span><span>Screening</span><span>Pathway catalogues</span><span>HPDS</span></div><div class="action"><a href="/resources/clinical-pathways/">Open collection →</a></div></article>'
RES_CARDS = '<article class="card resource-card" data-type="navigator" data-search="bowel cancer screening pathway navigator fit faecal immunochemical test colonoscopy pathology surveillance lynch syndrome programme assurance England clinical pathway screening">\n<div class="type">Pathway navigator</div><h3>Bowel Cancer Screening</h3>\n<p>Explore 53 draft screening pathway families covering eligibility, FIT testing, specialist screening practitioner assessment, colonoscopy, pathology, surveillance and assurance.</p>\n<div class="tags"><span>Clinical pathways</span><span>Screening</span><span>FIT</span></div>\n<div class="action"><a href="/resources/clinical-pathways/bowel-cancer-screening/">Open navigator →</a></div></article>\n<article class="card resource-card" data-type="navigator" data-search="diabetic eye screening pathway navigator retinal screening grading images hospital eye service surveillance recall referrals assurance England clinical pathway screening">\n<div class="type">Pathway navigator</div><h3>Diabetic Eye Screening</h3>\n<p>Explore 44 draft screening pathway families spanning cohort management, retinal imaging and grading, call and recall, surveillance, hospital eye service referral and assurance.</p>\n<div class="tags"><span>Clinical pathways</span><span>Retinal imaging</span><span>Screening</span></div>\n<div class="action"><a href="/resources/clinical-pathways/diabetic-eye-screening/">Open navigator →</a></div></article>\n'
COL_CARDS = '<article class="card resource-card pathway-card" data-type="navigator" data-search="bowel cancer screening population FIT laboratory specialist screening practitioner colonoscopy pathology Lynch syndrome screening surveillance assurance">\n<div class="type">Pathway navigator</div><h3>Bowel Cancer Screening</h3>\n<p>Draft reference screening pathways covering eligibility, FIT, specialist assessment, colonoscopy, pathology, Lynch syndrome and surveillance.</p>\n<div class="tags"><span>Screening</span><span>FIT</span><span>53 pathway families</span></div>\n<div class="action"><a href="bowel-cancer-screening/">Open navigator →</a></div></article>\n<article class="card resource-card pathway-card" data-type="navigator" data-search="diabetic eye screening retinal imaging grading GP2DRS invitation call recall digital surveillance hospital eye service referral screening assurance">\n<div class="type">Pathway navigator</div><h3>Diabetic Eye Screening</h3>\n<p>Draft reference screening pathways covering eligibility, retinal imaging and grading, recall, surveillance and hospital eye service referral.</p>\n<div class="tags"><span>Screening</span><span>Retinal imaging</span><span>44 pathway families</span></div>\n<div class="action"><a href="diabetic-eye-screening/">Open navigator →</a></div></article>\n'

def patch_home(s):
    if '/resources/clinical-pathways/bowel-cancer-screening/' in s and '/resources/clinical-pathways/diabetic-eye-screening/' in s:
        return s
    m=re.search(r'(<section\b[^>]*\bid=["\']new-content["\'][^>]*>.*?<div\s+class=["\']grid grid-2["\']>)',s,re.S|re.I)
    if not m: raise ValueError('Cannot locate latest additions card grid')
    return s[:m.end()]+"\n"+HOME_CARDS+s[m.end():]

def patch_resources(s):
    if '/resources/clinical-pathways/bowel-cancer-screening/' in s and '/resources/clinical-pathways/diabetic-eye-screening/' in s:
        return s
    m=re.search(r'<article\s+class="card resource-card"\s+data-search="clinical pathways collection[^\"]*"\s+data-type="collection">.*?</article>',s,re.S)
    if not m: raise ValueError('Cannot locate the Clinical Pathways collection resource card')
    return s[:m.start()]+COLLECTION_CARD+"\n"+RES_CARDS+s[m.end():]

def patch_collection(s):
    if 'href="bowel-cancer-screening/"' in s and 'href="diabetic-eye-screening/"' in s:
        return s
    nav=s.find('<section id="navigators"')
    if nav<0: raise ValueError('Cannot locate navigators section')
    grid=s.find('<div class="resource-grid">',nav)
    if grid<0: raise ValueError('Cannot locate navigator cards grid')
    n=grid+len('<div class="resource-grid">')
    return s[:n]+"\n"+COL_CARDS+s[n:]

def main():
    root=Path(sys.argv[1]) if len(sys.argv)>1 else Path('.')
    jobs=[('index.html',patch_home),('resources.html',patch_resources),('resources/clinical-pathways/index.html',patch_collection)]
    edits=[]
    for name,fn in jobs:
        path=root/name
        if not path.exists(): raise SystemExit(f'Missing file: {path}')
        old=path.read_text(encoding='utf-8'); new=fn(old)
        edits.append((path,old,new))
    for path,old,new in edits:
        if old==new:
            print('Already current:',path)
        else:
            backup=path.with_name(path.name+'.before-screening-navigation.bak')
            if not backup.exists(): backup.write_text(old,encoding='utf-8')
            path.write_text(new,encoding='utf-8')
            print('Updated:',path)
    print('Copy the two navigator directories separately, then check all links before committing.')

if __name__=='__main__': main()
