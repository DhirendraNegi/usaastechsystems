const agents = [
  { id:'atlas-sdr', name:'Atlas SDR', icon:'AT', category:'Sales', subcategory:'Prospecting', price:'$149', period:'/ month', rating:'4.9', installs:'2,840', accent:'#00d4ff', summary:'Finds qualified prospects and builds hyper-personalized outreach campaigns at scale.' },
  { id:'closer-call', name:'Closer Call', icon:'CC', category:'Sales', subcategory:'Conversation Intelligence', price:'$89', period:'/ month', rating:'4.8', installs:'1,460', accent:'#1e90ff', summary:'Analyzes call recordings, flags objections, and recommends next steps in real-time.' },
  { id:'campaign-pilot', name:'Campaign Pilot', icon:'CP', category:'Marketing', subcategory:'Campaigns', price:'$119', period:'/ month', rating:'4.7', installs:'1,930', accent:'#00bfff', summary:'Plans, sequences, and optimizes multi-channel campaigns from concept to launch.' },
  { id:'content-forge', name:'Content Forge', icon:'CF', category:'Marketing', subcategory:'Content', price:'$79', period:'/ month', rating:'4.8', installs:'3,120', accent:'#00d4ff', summary:'Turns content briefs into polished, on-brand blog posts, emails, and social threads.' },
  { id:'ledger-mind', name:'Ledger Mind', icon:'LM', category:'Finance', subcategory:'FP&A', price:'$189', period:'/ month', rating:'4.9', installs:'870', accent:'#1e90ff', summary:'Monitors cash, forecasts working capital, and identifies cost-saving opportunities.' },
  { id:'invoice-guard', name:'Invoice Guard', icon:'IG', category:'Finance', subcategory:'Accounts Payable', price:'$99', period:'/ month', rating:'4.6', installs:'1,110', accent:'#00bfff', summary:'Routes invoices, flags duplicates, and enforces approval policies automatically.' },
  { id:'support-sage', name:'Support Sage', icon:'SS', category:'Customer', subcategory:'Customer Support', price:'$129', period:'/ month', rating:'4.9', installs:'2,270', accent:'#00d4ff', summary:'Resolves common support tickets, escalates edge cases, and updates your knowledge base.' },
  { id:'renewal-radar', name:'Renewal Radar', icon:'RR', category:'Customer', subcategory:'Customer Success', price:'$139', period:'/ month', rating:'4.7', installs:'940', accent:'#1e90ff', summary:'Tracks contract renewal dates, predicts churn, and recommends win-back tactics.' },
  { id:'talent-scout', name:'Talent Scout', icon:'TS', category:'People', subcategory:'Recruiting', price:'$109', period:'/ month', rating:'4.8', installs:'1,520', accent:'#00bfff', summary:'Sources passive candidates, screens resumes, and schedules interviews on your behalf.' },
  { id:'people-ops', name:'People Ops Desk', icon:'PO', category:'People', subcategory:'HR Operations', price:'$69', period:'/ month', rating:'4.6', installs:'780', accent:'#00d4ff', summary:'Answers employee questions, processes expense reports, and tracks policy changes.' },
  { id:'contract-lens', name:'Contract Lens', icon:'CL', category:'Operations', subcategory:'Legal Operations', price:'$169', period:'/ month', rating:'4.8', installs:'690', accent:'#1e90ff', summary:'Extracts key terms, flags redlines, and compares contracts against templates.' },
  { id:'ops-conductor', name:'Ops Conductor', icon:'OC', category:'Operations', subcategory:'Workflow', price:'$159', period:'/ month', rating:'4.9', installs:'1,340', accent:'#00bfff', summary:'Chains systems together, enriches data, and routes work to the right team members.' }
];

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.nav-links');
if (menuButton && navigation) {
  menuButton.addEventListener('click', () => { const open = navigation.classList.toggle('open'); menuButton.setAttribute('aria-expanded', String(open)); });
  navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { navigation.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); }));
}

document.querySelectorAll('[data-year]').forEach(element => { element.textContent = new Date().getFullYear(); });

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), { threshold: 0.1 });
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
    <div class="agent-card-bottom"><div class="card-price"><strong>${agent.price}</strong><small>${agent.period}</small></div><button class="detail-button" type="button" data-agent-id="${agent.id}">View details →</button></div>
  </article>`;
}

function renderCatalog() {
  if (!catalog) return;
  const filtered = agents.filter(agent => (activeCategory === 'All' || agent.category === activeCategory) && `${agent.name} ${agent.category} ${agent.subcategory} ${agent.summary}`.toLowerCase().includes(searchTerm));
  catalog.innerHTML = filtered.length ? filtered.map(agentCard).join('') : '<div class="empty-state"><h3>No agents found.</h3><p>Try a different search or category.</p><button class="button small outline">Clear filters</button></div>';
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
  catalog.addEventListener('click', event => { const trigger = event.target.closest('[data-agent-id]'); if (trigger) openAgent(agents.find(agent => agent.id === trigger.dataset.agentId)); if (event.target.closest('.empty-state button')) { activeCategory = 'All'; searchTerm = ''; document.querySelectorAll('[data-category]').forEach(item => item.classList.remove('active')); renderCatalog(); } });
  const requestedAgent = agents.find(agent => agent.id === pageParams.get('agent'));
  if (requestedAgent) openAgent(requestedAgent);
}

modal?.addEventListener('click', event => { if (event.target.closest('[data-modal-close]')) closeModal(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && modal?.classList.contains('open')) closeModal(); });

const selectedAgent = new URLSearchParams(window.location.search).get('agent');
const agentField = document.querySelector('[name="agent"]');
if (selectedAgent && agentField) agentField.value = selectedAgent;
