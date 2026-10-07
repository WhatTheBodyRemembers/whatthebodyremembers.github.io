window.EXHIBITION = {
 socials: {mhep:[{label:'Follow MHEP on Instagram',url:'https://www.instagram.com/mhep.aub/'}],mhs:[{label:'Follow MHS on Instagram',url:'https://www.instagram.com/aubmhsociety/'},{label:'MHS on LinkedIn',url:'https://www.linkedin.com/company/medical-humanitiessociety/'}]},
 title: 'What the Body Remembers', subtitle: 'Medicine, War, and Care in Lebanon',
 course: 'An exhibition of student multimedia work from CHLA 215, Introduction to the Medical Humanities',
 curator: 'Dr. Joelle M. Abi-Rached',
 openingImage: {src:'', fullSrc:'', alt:'', approved:false, caption:'[Caption to be supplied]', credit:'[Attribution to be supplied]', statement:'[Contextual statement to be supplied]'},
 themes: [
 {id:'crisis',title:'Crisis',intro:'What happens to care in conditions of extreme crisis? These works consider medical practice amid war, scarcity, and Lebanon’s accumulated crises since 2019.'},
 {id:'care',title:'Care',intro:'Care is a lived responsibility as well as a clinical practice. Professional obligation, ethical duties, and the limits of available resources shape what caregivers can do.'},
 {id:'body',title:'Body',intro:'What does crisis leave behind in bodies and caregivers? Embodied trauma, amputation, burnout, and moral injury bring the experience of crisis into view beyond the moment of emergency.'},
 {id:'aftermath',title:'Aftermath',intro:'Survival opens further questions. Rehabilitation, prosthetics, and the continuing effects of trauma ask us to consider how care extends beyond an immediate crisis.'},
 {id:'access',title:'Access',intro:'Who receives care—and on what terms? Financial capacity, institutional structures, political fragmentation, and informal networks shape the possibilities of treatment and recovery.'},
 {id:'witness',title:'Witness',intro:'Research, oral history, documentary film, sound, and photography bring experiences of care into a shared space. Listening and looking also carry responsibilities: to consent, privacy, context, and attribution.'}
 ],
 works: [
 {id:'doctors-on-the-frontline',type:'film',creator:'Rayan Ali-Ahmad',title:'Doctors on the Frontline: Healing Amid War in Lebanon and Gaza',themes:['crisis','care','witness'],synopsis:'Physician testimony opens questions about medical responsibility and the politicization of care in conflict. The project considers the destruction of healthcare infrastructure and hospitals as places of care and social memory.'},
 {id:'burnout-in-medicine',type:'film',creator:'Léa Halabi',title:'Burnout in Medicine: The Cost of Saving Lives in Lebanon',themes:['crisis','care','body'],synopsis:'An examination of physician burnout, moral injury, and collective trauma in Lebanon amid the accumulated crises since 2019. The project considers the pressures that professional obligation places on those responsible for saving lives.'},
 {id:'war-medicine',type:'podcast',creator:'Nizar Jaber',title:'War Medicine in Lebanon: Ethics, Practice, and the Limits of Care in Times of Crisis',themes:['crisis','care'],synopsis:'A consideration of war medicine through triage, scarcity, ethical duties, and clinical decisions. Education and testimony offer ways to examine the limits of care in times of crisis.'},
 {id:'rebuilt-lives',type:'podcast',creator:'Hawraa Ayoub',title:'Rebuilt Lives',themes:['body','aftermath','access'],synopsis:'From mass-casualty response to rehabilitation, this project examines amputation, prosthetics, and the costs of recovery. It asks how inequalities of access shape life after survival.'},
 {id:'the-body-remembers',type:'podcast',creator:'Seungju Moon',title:'The Body Remembers',themes:['body','aftermath','witness'],synopsis:'Oral histories explore embodied war trauma and the limits of diagnostic categories in representing lived experience.'},
 {id:'negotiated-care',type:'podcast',creator:'Marilynn Abou Zaidan',title:'Negotiated Care',themes:['care','access'],synopsis:'An inquiry into healthcare access shaped by financial capacity, institutional structures, political fragmentation, and informal networks.'}
 ].map(w=>({...w,statement:'[Artist statement to be supplied]',src:'',poster:'',duration:'',transcript:'',captions:'',approved:false,contentNote:''})),
 photographs: Array.from({length:20},(_,i)=>({id:`photograph-${String(i+1).padStart(2,'0')}`,type:'photograph',title:'[Photograph title to be supplied]',creator:'[Photographer credit to be supplied]',caption:'[Caption to be supplied]',statement:'[Artist statement to be supplied]',src:'',fullSrc:'',alt:'',date:'',location:'',themes:[],approved:false,contentNote:'',layout:i%3===0?'large':'statement'})),
 mhs:'The AUB Medical Humanities Society is dedicated to cultivating an intellectually rigorous and deeply humane practice of medicine by placing the lived human experience at the center of healthcare. Through an interdisciplinary lens drawing on literature, philosophy, history, ethics, the arts, and the social sciences, the Society explores how stories, culture, identity, and moral reflection shape the relationship between caregiver and patient.',
 mhep:'MHEP is an interdisciplinary program at AUB’s Faculty of Medicine connecting historical, ethical, and policy perspectives on medicine, health, and healthcare. It brings scholars, clinicians, and students into dialogue across the Global South and Global North to examine challenges including war, migration, pandemics, climate change, and technological disruption, and to reconsider medicine’s social and ethical responsibilities.'
};

// Embed tested successfully by the exhibition organizer, 28 September 2026.
Object.assign(window.EXHIBITION.works.find(w=>w.id==='burnout-in-medicine'), {
 embedUrl:'https://mailaub-my.sharepoint.com/personal/ja205_aub_edu_lb/_layouts/15/embed.aspx?UniqueId=e561dbbf-f1b6-42b2-8791-6ea3bea44790&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create',
 shareUrl:'https://mailaub-my.sharepoint.com/:v:/g/personal/ja205_aub_edu_lb/IQC_22HltvGyQoeRbqO-pEeQAX0yHnPT7_XWUDb2_OFSOOI?e=UKCyPa',
 duration:'20:08', approved:true,
 contentNote:'Includes news footage of war and discussion of physician burnout and trauma.'
});

Object.assign(window.EXHIBITION.works.find(w=>w.id==='doctors-on-the-frontline'), {
 poster:'rayan-cover.jpg',
 posterAlt:'Cover for Doctors on the Frontline: Healing Amid War in Lebanon and Gaza, by Rayan Ali Ahmad. A black-and-white filmstrip of medical care and war, with yellow title lettering and outlines around three portraits.',
 previewSrc:'rayan-preview.mp4',
 shareUrl:'https://mailaub-my.sharepoint.com/:v:/g/personal/raa189_mail_aub_edu/IQBvDqO1Kny0TrTI2pUyglObAdFHgVfQxqiYZIFpqnWs6yE?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=3Bgpsj',
 approved:true
});

// Corrected recording supplied by the organizer, 5 October 2026.
Object.assign(window.EXHIBITION.works.find(w=>w.id==='negotiated-care'), {
 shareUrl:'https://mailaub-my.sharepoint.com/:v:/g/personal/raa189_mail_aub_edu/IQD2b7ZkKyxNR57lWVnX7elKAYtrr8XqE-3cXzHPymeUxJM?e=o9xQHk',
 approved:true
});

Object.assign(window.EXHIBITION.works.find(w=>w.id==='negotiated-care'), {
 embedUrl:'https://mailaub-my.sharepoint.com/personal/raa189_mail_aub_edu/_layouts/15/embed.aspx?UniqueId=36df76bf-455e-405b-ac36-6a5e6f189977&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create'
});
