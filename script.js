const agents = [
  { id:'atlas-sdr', name:'Atlas SDR', icon:'AT', category:'Sales', subcategory:'Prospecting', price:'$149', period:'/ month', rating:'4.9', installs:'2,840', accent:'#d8f65a', summary:'Finds qualified accounts, researches decision-makers, and drafts personalized outreach around the clock.', description:'Atlas SDR runs the top of your funnel from account discovery through meeting-ready handoff. It researches buying signals, maps stakeholders, writes contextual sequences, and keeps your CRM clean without pretending every lead is qualified.', capabilities:['Account and contact research','Intent-signal monitoring','Multi-step email sequences','CRM enrichment and updates','Lead scoring and routing','Meeting brief generation'], stack:'HubSpot, Salesforce, Apollo, Gmail, Slack', setup:'About 20 minutes', support:'Priority email', badge:'Best seller' },
  { id:'closer-call', name:'Closer Call', icon:'CC', category:'Sales', subcategory:'Conversation Intelligence', price:'$89', period:'/ month', rating:'4.8', installs:'1,460', accent:'#a9d8e8', summary:'Joins sales calls, identifies objections, and turns every conversation into clear next steps.', description:'Closer Call records, transcribes, and interprets revenue conversations. It flags risk, captures commitments, coaches reps against your playbook, and writes follow-up that sounds like the person who led the call.', capabilities:['Call transcription and analysis','Objection detection','Deal-risk alerts','Automated follow-up drafts','Rep coaching scorecards','CRM note synchronization'], stack:'Zoom, Meet, Teams, Salesforce, HubSpot', setup:'About 10 minutes', support:'Standard', badge:'Fast setup' },
  { id:'campaign-pilot', name:'Campaign Pilot', icon:'CP', category:'Marketing', subcategory:'Campaigns', price:'$119', period:'/ month', rating:'4.7', installs:'1,930', accent:'#f4c84d', summary:'Plans, produces, and optimizes multi-channel campaigns from one grounded brief.', description:'Campaign Pilot converts positioning and goals into a campaign system. It develops concepts, channel plans, briefs, production schedules, and weekly optimization recommendations while preserving your brand rules.', capabilities:['Campaign concept development','Channel and budget planning','Creative brief generation','Content calendar management','Performance interpretation','Weekly optimization memos'], stack:'Google Ads, LinkedIn, Meta, Notion, Asana', setup:'About 30 minutes', support:'Priority email', badge:'Popular' },
  { id:'content-forge', name:'Content Forge', icon:'CF', category:'Marketing', subcategory:'Content', price:'$79', period:'/ month', rating:'4.8', installs:'3,120', accent:'#f05a2a', summary:'Turns expert knowledge into useful, on-brand articles, newsletters, and social content.', description:'Content Forge interviews your source material before it writes. It extracts claims, examples, and points of view from calls and documents, then adapts them into channel-specific content with a consistent editorial voice.', capabilities:['Source material analysis','Long-form article drafting','Newsletter production','Social content adaptation','Brand voice enforcement','Editorial calendar support'], stack:'Notion, Google Drive, Webflow, WordPress, Slack', setup:'About 15 minutes', support:'Standard', badge:'Most installed' },
  { id:'ledger-mind', name:'Ledger Mind', icon:'LM', category:'Finance', subcategory:'FP&A', price:'$189', period:'/ month', rating:'4.9', installs:'870', accent:'#d8f65a', summary:'Monitors cash, explains variance, and prepares decision-ready financial forecasts.', description:'Ledger Mind gives operators a current explanation of business performance. It reconciles reporting inputs, compares plan to actuals, builds scenarios, and produces board-ready commentary with traceable source references.', capabilities:['Variance analysis','Cash-flow monitoring','Scenario modeling','Forecast refreshes','Board narrative drafting','Anomaly investigation'], stack:'QuickBooks, Xero, NetSuite, Sheets, Slack', setup:'1–2 business days', support:'White-glove', badge:'Finance verified' },
  { id:'invoice-guard', name:'Invoice Guard', icon:'IG', category:'Finance', subcategory:'Accounts Payable', price:'$99', period:'/ month', rating:'4.6', installs:'1,110', accent:'#a9d8e8', summary:'Reviews invoices, catches exceptions, and routes approvals before payment delays begin.', description:'Invoice Guard reads incoming invoices, checks them against purchase orders and vendor history, identifies duplicate or unusual charges, and sends clean approval packets to the right owner.', capabilities:['Invoice data extraction','PO matching','Duplicate detection','Exception classification','Approval routing','Vendor inquiry drafting'], stack:'Bill.com, Ramp, QuickBooks, NetSuite, Gmail', setup:'About 45 minutes', support:'Standard', badge:'Controls ready' },
  { id:'support-sage', name:'Support Sage', icon:'SS', category:'Customer', subcategory:'Customer Support', price:'$129', period:'/ month', rating:'4.9', installs:'2,270', accent:'#f4c84d', summary:'Resolves routine tickets, gathers context, and escalates the issues that need a human.', description:'Support Sage works across your help center and ticket history to answer accurately with citations. It knows when confidence is low, gathers missing details, and hands off a complete case instead of a vague escalation.', capabilities:['Tier-one ticket resolution','Knowledge-grounded answers','Sentiment and urgency detection','Intelligent escalation','Case summarization','Help-center gap reporting'], stack:'Zendesk, Intercom, Gorgias, Slack, Notion', setup:'About 30 minutes', support:'24/5', badge:'Customer favorite' },
  { id:'renewal-radar', name:'Renewal Radar', icon:'RR', category:'Customer', subcategory:'Customer Success', price:'$139', period:'/ month', rating:'4.7', installs:'940', accent:'#f05a2a', summary:'Tracks account health and gives customer teams a head start on renewals and risk.', description:'Renewal Radar combines product usage, support history, relationship activity, and commercial milestones into practical account health. It spots drift early and recommends the next best customer action.', capabilities:['Account health scoring','Renewal-risk detection','Success-plan updates','Stakeholder mapping','QBR brief generation','Expansion signal monitoring'], stack:'Gainsight, Salesforce, HubSpot, Zendesk, Slack', setup:'1 business day', support:'Priority email', badge:'Retention pick' },
  { id:'talent-scout', name:'Talent Scout', icon:'TS', category:'People', subcategory:'Recruiting', price:'$109', period:'/ month', rating:'4.8', installs:'1,520', accent:'#d8f65a', summary:'Sources qualified candidates and keeps every applicant moving with a human touch.', description:'Talent Scout turns a role brief into a transparent sourcing and screening workflow. It finds relevant candidates, explains fit, drafts personalized outreach, schedules interviews, and keeps candidates informed.', capabilities:['Candidate sourcing','Fit rationale generation','Personalized outreach','Screening coordination','Interview scheduling','Candidate communication'], stack:'Greenhouse, Lever, Ashby, LinkedIn, Gmail', setup:'About 25 minutes', support:'Standard', badge:'Recruiter pick' },
  { id:'people-ops', name:'People Ops Desk', icon:'PO', category:'People', subcategory:'HR Operations', price:'$69', period:'/ month', rating:'4.6', installs:'780', accent:'#a9d8e8', summary:'Answers policy questions and guides employees through recurring people processes.', description:'People Ops Desk provides a reliable first stop for internal policy, benefits, onboarding, and process questions. It cites your source materials and routes sensitive or ambiguous cases to the appropriate person.', capabilities:['Policy Q&A with citations','Onboarding guidance','Benefits navigation','Request intake and routing','Document collection','Knowledge-gap reporting'], stack:'Slack, Teams, Google Drive, Notion, BambooHR', setup:'About 20 minutes', support:'Standard', badge:'Team essential' },
  { id:'contract-lens', name:'Contract Lens', icon:'CL', category:'Operations', subcategory:'Legal Operations', price:'$169', period:'/ month', rating:'4.8', installs:'690', accent:'#f4c84d', summary:'Reviews commercial agreements against your playbook and highlights terms worth attention.', description:'Contract Lens accelerates first-pass review without obscuring legal judgment. It compares agreements with your clause library, identifies deviations, explains business impact, and prepares a structured redline brief.', capabilities:['Clause extraction','Playbook comparison','Risk flagging','Redline brief preparation','Obligation tracking','Contract summarization'], stack:'DocuSign, Ironclad, Drive, SharePoint, Slack', setup:'1–2 business days', support:'White-glove', badge:'Expert reviewed' },
  { id:'ops-conductor', name:'Ops Conductor', icon:'OC', category:'Operations', subcategory:'Workflow', price:'$159', period:'/ month', rating:'4.9', installs:'1,340', accent:'#f05a2a', summary:'Coordinates recurring work across systems, owners, approvals, and deadlines.', description:'Ops Conductor watches the handoffs between teams. It starts recurring workflows, checks for missing inputs, nudges owners with context, resolves routine exceptions, and provides a live operational record.', capabilities:['Cross-system orchestration','Deadline monitoring','Approval coordination','Exception handling','SOP execution','Operational reporting'], stack:'Asana, Monday, Jira, Slack, Airtable', setup:'About 45 minutes', support:'Priority email', badge:'Ops favorite' }
];

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.nav-links');
if (menuButton && navigation) {
  menuButton.addEventListener('click', () => { const open = navigation.classList.toggle('open'); menuButton.setAttribute('aria-expanded', String(open)); });
  navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { navigation.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); }));
}

document.querySelectorAll('[data-year]').forEach(element => { element.textContent = new Date().getFullYear(); });

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), { threshold: .1 });
  document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
} else { document.querySelectorAll('.reveal').forEach(element => element.classList.add('visible')); }

const catalog = document.querySelector('[data-agent-catalog]');
const modal = document.querySelector('.agent-modal');
let activeCategory = 'All';
let searchTerm = '';
const pageParams = new URLSearchParams(window.location.search);
const requestedCategory = pageParams.get('category');
if (requestedCategory && [...new Set(agents.map(agent => agent.category))].includes(requestedCategory)) {
  activeCategory = requestedCategory;
  document.querySelectorAll('[data-category]').forEach(item => item.classList.toggle('active', item.dataset.category === requestedCategory));
}

function agentCard(agent) {
  return `<article class="agent-card" style="--card-accent:${agent.accent}">
    <div class="agent-card-top"><span class="agent-icon">${agent.icon}</span><span class="agent-rating">★ ${agent.rating}</span></div>
    <div class="agent-category">${agent.category} / ${agent.subcategory}</div>
    <h3>${agent.name}</h3><p>${agent.summary}</p>
    <div class="agent-card-bottom"><div class="card-price"><strong>${agent.price}</strong><small>${agent.period}</small></div><button class="detail-button" type="button" data-agent-id="${agent.id}">View agent ↗</button></div>
  </article>`;
}

function renderCatalog() {
  if (!catalog) return;
  const filtered = agents.filter(agent => (activeCategory === 'All' || agent.category === activeCategory) && `${agent.name} ${agent.category} ${agent.subcategory} ${agent.summary}`.toLowerCase().includes(searchTerm));
  catalog.innerHTML = filtered.length ? filtered.map(agentCard).join('') : '<div class="empty-state"><h3>No agents found.</h3><p>Try a different search or category.</p><button class="button small outline" type="button" data-reset-filters>Reset filters</button></div>';
  const count = document.querySelector('[data-result-count]');
  if (count) count.textContent = `${filtered.length} agent${filtered.length === 1 ? '' : 's'} available`;
}

function openAgent(agent) {
  if (!modal) return;
  modal.querySelector('[data-modal-icon]').textContent = agent.icon;
  modal.querySelector('[data-modal-category]').textContent = `${agent.category} / ${agent.subcategory}`;
  modal.querySelector('[data-modal-name]').textContent = agent.name;
  modal.querySelector('[data-modal-description]').textContent = agent.description;
  modal.querySelector('[data-modal-capabilities]').innerHTML = agent.capabilities.map(item => `<li>${item}</li>`).join('');
  modal.querySelector('[data-modal-stack]').textContent = agent.stack;
  modal.querySelector('[data-modal-setup]').textContent = agent.setup;
  modal.querySelector('[data-modal-support]').textContent = agent.support;
  modal.querySelector('[data-modal-price]').textContent = agent.price;
  modal.querySelector('[data-modal-period]').textContent = agent.period;
  modal.querySelector('[data-modal-purchase]').href = `/contact.html?agent=${encodeURIComponent(agent.name)}`;
  modal.querySelector('.modal-hero').style.background = agent.accent;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  modal.querySelector('.modal-close').focus();
}

function closeModal() {
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

if (catalog) {
  renderCatalog();
  document.querySelector('[data-agent-search]')?.addEventListener('input', event => { searchTerm = event.target.value.trim().toLowerCase(); renderCatalog(); });
  document.querySelectorAll('[data-category]').forEach(button => button.addEventListener('click', () => { document.querySelectorAll('[data-category]').forEach(item => item.classList.remove('active')); button.classList.add('active'); activeCategory = button.dataset.category; renderCatalog(); }));
  catalog.addEventListener('click', event => { const trigger = event.target.closest('[data-agent-id]'); if (trigger) openAgent(agents.find(agent => agent.id === trigger.dataset.agentId)); if (event.target.closest('[data-reset-filters]')) { activeCategory = 'All'; searchTerm = ''; document.querySelector('[data-agent-search]').value = ''; document.querySelectorAll('[data-category]').forEach(item => item.classList.toggle('active', item.dataset.category === 'All')); renderCatalog(); } });
  const requestedAgent = agents.find(agent => agent.id === pageParams.get('agent'));
  if (requestedAgent) openAgent(requestedAgent);
}

modal?.addEventListener('click', event => { if (event.target.closest('[data-modal-close]')) closeModal(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && modal?.classList.contains('open')) closeModal(); });

const selectedAgent = new URLSearchParams(window.location.search).get('agent');
const agentField = document.querySelector('[name="agent"]');
if (selectedAgent && agentField) agentField.value = selectedAgent;
