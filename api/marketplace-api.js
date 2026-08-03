window.MarketplaceAPI = {
  categories: () => [...new Set(window.AGENT_DATA.map(a => a.category))],
  search: ({query='', category='', maxPrice=1000, sort='recommended'} = {}) => {
    const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
    let results = window.AGENT_DATA.filter(a => (!category || a.category === category) && a.price <= maxPrice && (!terms.length || terms.some(t => `${a.name} ${a.category} ${a.sub} ${a.description}`.toLowerCase().includes(t))));
    if (sort === 'low') results.sort((a,b) => a.price - b.price);
    if (sort === 'high') results.sort((a,b) => b.price - a.price);
    return Promise.resolve(results);
  }
};
