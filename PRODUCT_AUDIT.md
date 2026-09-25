# SAP Bit usefulness audit

## Summary

SAP Bit has a clear technical-documentation premise and a clean starting
taxonomy. Its current pages, however, are mostly introductory explainers with
small representative lists. They do not yet help someone confidently answer a
real SAP work question such as “which released API should I use?”, “what
changed in S/4HANA?”, or “why does this Gateway call return 403?”.

The highest-value shift is from topic overviews to **versioned, evidence-backed
object records and task-oriented troubleshooting guides**.

## Highest-priority improvements

### 1. Make search the primary workflow

People usually arrive with a technical identifier, not a category: `VBAK`,
`VA01`, `BAPI_SALESORDER_CREATEFROMDAT2`, `/IWFND/MAINT_SERVICE`, or an error
message.

Add search that supports:

- Exact technical-name lookup, aliases, and prefix/wildcard matching
- Filtering by object type, module, release, deployment (ECC, S/4HANA,
  BTP), and API version
- Results that show the object type, short description, compatibility, and
  “last verified” date
- Deep links for each record and a copyable technical name

The current navigation is category-first and the configured `search: true`
does not by itself demonstrate that a searchable SAP-object index exists.

### 2. Publish real, individual object records

The T-code, table, function-module, RFC, and OData pages currently contain
short example lists. Convert those into a consistent record format, one page
per object, beginning with the highest-traffic objects.

Each record should include:

- Technical name, business description, object type, package/component, and
  relevant modules
- Supported product/release and deployment scope
- Status: current, compatibility only, deprecated, or unavailable in a given
  edition
- Key fields/parameters, data types, return structures, and authorization
  considerations
- Related objects, including *why* they are related
- Safe read/write examples and common failure modes
- Source links, last-verified date, and a correction mechanism

This makes results trustworthy and lets the site become useful even when a
visitor has only a single identifier.

### 3. Put ECC, S/4HANA, Fiori, and BTP context on every answer

An unqualified statement about an SAP table, transaction, cluster/pool table,
function module, or OData service can be misleading. Add a prominent
compatibility badge and a “modern alternative” section to every technical
record.

For example, distinguish:

- ECC versus S/4HANA releases
- SAP GUI transaction versus Fiori app
- Classic Gateway/SEGW OData versus RAP/OData V4
- Direct table use versus released CDS view, API, or event
- On-premise/private cloud versus public-cloud extensibility constraints

This is particularly important before expanding the existing lists of tables
and APIs: a concrete-looking list without version scope encourages unsafe
copy/paste decisions.

### 4. Organize content around jobs to be done

Keep the object reference, but add task playbooks for the problems people
actually bring to SAP documentation:

- Find the data source, CDS view, API, and authorization behind a Fiori app
- Choose a released API instead of a table or function module
- Test and troubleshoot an OData request (metadata, CSRF, paging, filters,
  401/403/404/500)
- Configure and diagnose an RFC destination and failed LUW
- Trace a transaction to its program, tables, authorization checks, and
  transport
- Move a configuration change safely through development, test, and
  production

Each playbook should name prerequisites, transaction/app paths, expected
evidence, rollback/safety notes, and links into relevant object records.

### 5. Build a relationship graph, not just isolated lists

The site's stated cross-reference goal is one of its strongest potential
advantages. Make it concrete with structured relationships:

`Fiori app → business catalog/role → OData service → entity set → CDS view →
table/API`, and `T-code → program → authorization object → tables → BAPI`.

Start with manually curated links for a small number of common workflows.
Later, offer a visual explorer and a machine-readable export. Relationship
links are more useful than a generic “related tables” column because they
explain read versus write paths and whether a relation is supported.

### 6. Add executable, safe integration recipes

OData and RFC pages need examples that can be adapted rather than only URL
patterns and conceptual steps. Include:

- `curl`/Postman request examples with placeholders and redacted credentials
- Correct URL encoding, `$select`, `$filter`, `$expand`, paging, and metadata
  inspection examples
- CSRF-token and cookie flow for writes
- ABAP examples for RFC/BAPI calls, including `RETURN` handling and explicit
  commit/rollback guidance
- Payload and response samples, expected HTTP/message codes, and troubleshooting

Clearly mark write examples as non-production samples. Never encourage
production use of broad table reads or bypassing authorization checks.

### 7. Establish editorial trust signals

SAP technical references change by product release and customer customization.
Every substantive page should show:

- Applicable products/releases and verification date
- Official SAP documentation/API reference links where available
- Whether the example is standard SAP, illustrative, or customer-specific
- Known caveats and permissions required
- “Report an issue” and “request an object” controls

Add an editorial schema (frontmatter or structured data) so these details
cannot be forgotten on new pages.

## Content corrections and gaps to address early

- The landing page calls the site a “comprehensive” reference, while the
  current pages are introductory and selective. Reword the promise until a
  searchable object catalog exists.
- Object examples need release and deployment scope before being presented as
  generally applicable.
- The documentation needs explicit guidance for choosing supported/released
  APIs and CDS views over direct database access or older interfaces.
- RFC guidance should focus more on destination security, least privilege,
  retry/idempotency, monitoring, and return-message handling.
- OData guidance should separate V2 Gateway patterns from V4/RAP patterns and
  cover authentication, CSRF protection, paging, and service activation.
- Add missing core reference areas: CDS views, ABAP classes/interfaces,
  BAPIs/business objects, IDocs, authorization objects/roles, message classes,
  Fiori apps/catalogs, transports, and error/trace transactions.

## Suggested delivery sequence

1. **Foundation:** define record metadata, compatibility labels, sources, and
   correction/request workflow.
2. **Findability:** ship technical-name search plus filters and direct links.
3. **Useful depth:** publish 50–100 high-demand records with real
   relationships and version context.
4. **Problem solving:** ship OData and RFC troubleshooting playbooks with
   runnable examples.
5. **Scale:** add structured import/review tooling, relationship exploration,
   and community contribution moderation.

## Measures of success

- Search-to-record click-through and zero-result rate
- Percentage of records with release scope, source, and verification date
- Time for a visitor to reach a working example or diagnosed error
- Correction/request resolution time
- Repeat visits to task playbooks and object records

## Implementation note

The documentation build could not be validated in this environment yet because
pnpm's supply-chain policy skipped `esbuild`'s build script
(`ERR_PNPM_IGNORED_BUILDS`). Approve/rebuild that dependency according to the
project's dependency policy, then run `pnpm docs:build`.
