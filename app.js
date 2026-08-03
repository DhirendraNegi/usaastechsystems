const state = { query:'', category:'', maxPrice:1000, sort:'recommended' };
const grid = document.getElementById('agentGrid');
const categories = document.getElementById('categoryFilters');
const toast = document.getElementById('toast');
function renderFilters(){ categories.innerHTML = MarketplaceAPI.categories().map(c => `<button class="category-filter ${state.category===c?'selected':''}" data-category="${c}">${c}<span>${AGENT_DATA.filter(a=>a.category===c).length}</span></button>`).join(''); }
function renderAgents(){ MarketplaceAPI.search(state).then(agents => { document.getElementById('resultCount').textContent = `${agents.length} agent${agents.length===1?'':'s'} found`; grid.innerHTML = agents.length ? agents.map(a => `<article class="agent-card"><div class="card-top"><div class="agent-icon">${a.icon}</div><span class="rating">★ ${a.rating}</span></div><div class="agent-category">${a.category} <span>/</span> ${a.sub}</div><h3>${a.name}</h3><p>${a.description}</p><div class="card-bottom"><div><strong>$${a.price}</strong><small>/ month</small><em>by ${a.provider}</em></div><button class="discover" data-agent="${a.name}" aria-label="View ${a.name}">→</button></div></article>`).join('') : `<div class="empty-state"><strong>No exact match yet.</strong><span>Try another need or browse a category.</span></div>`; }); }
function refresh(){ renderFilters(); renderAgents(); }
function showToast(message){ toast.textContent = message; toast.classList.add('show'); setTimeout(()=>toast.classList.remove('show'),2600); }
document.getElementById('searchForm').addEventListener('submit', e => { e.preventDefault(); state.query = document.getElementById('naturalSearch').value; refresh(); document.getElementById('marketplace').scrollIntoView({behavior:'smooth'}); });
document.querySelector('.prompt-suggestions').addEventListener('click', e => { if(e.target.dataset.query){ document.getElementById('naturalSearch').value=e.target.dataset.query; document.getElementById('searchForm').requestSubmit(); }});
categories.addEventListener('click', e => { const category=e.target.closest('[data-category]')?.dataset.category; if(category){ state.category = state.category===category?'':category; refresh(); }});
document.getElementById('clearFilter').addEventListener('click',()=>{ state.category=''; state.query=''; state.maxPrice=1000; document.getElementById('naturalSearch').value=''; document.getElementById('priceRange').value=1000; document.getElementById('budgetValue').textContent='Any price'; refresh(); });
document.getElementById('priceRange').addEventListener('input',e=>{state.maxPrice=+e.target.value; document.getElementById('budgetValue').textContent=state.maxPrice===1000?'Any price':`Up to $${state.maxPrice}`; renderAgents();});
document.getElementById('sortSelect').addEventListener('change',e=>{state.sort=e.target.value;renderAgents();});
document.getElementById('personaSelect').addEventListener('change',e=>{ document.querySelectorAll('.role-panel').forEach(p=>p.classList.toggle('active',p.dataset.panel===e.target.value)); document.querySelector(`[data-panel="${e.target.value}"]`).scrollIntoView({behavior:'smooth',block:'center'}); });
document.getElementById('openListing').addEventListener('click',()=>document.getElementById('listingDialog').showModal());
document.getElementById('listingDialog').addEventListener('close',()=>{if(document.getElementById('listingDialog').returnValue==='submit')showToast('Listing draft saved — ready for provider review.');});
document.getElementById('reviewQueue').addEventListener('click',()=>showToast('12 submissions are waiting for admin review.'));
grid.addEventListener('click',e=>{const name=e.target.closest('[data-agent]')?.dataset.agent;if(name)showToast(`${name} added to your evaluation list.`)});
refresh();
