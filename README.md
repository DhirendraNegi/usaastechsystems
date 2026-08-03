# USAAS Agent Exchange prototype

Open `index.html` in any modern browser to explore the prototype.

## Three-tier design

| Tier | Prototype component | Production responsibility |
| --- | --- | --- |
| Experience | `index.html`, `styles.css`, `app.js` | Buyer discovery, seller studio, and admin command views |
| Application | `api/marketplace-api.js` | Search, category filtering, pricing, listing, identity, and approval APIs |
| Data | `data/agents.js` | Agent catalog, provider, taxonomy, pricing, reviews, and audit records |

The prototype represents natural-language discovery locally by matching the request against agent names, categories, sub-categories, and descriptions. In production, this application-layer endpoint would connect to an embedding/vector search service and access-controlled marketplace APIs.

## Persona paths

- Buyer: searches agents by natural-language need, category, and budget.
- Seller: previews provider metrics and opens a new agent listing draft.
- Admin: views an approval queue for marketplace governance.
