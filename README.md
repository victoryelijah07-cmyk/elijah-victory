# elijahvictory.com — setup and launch

The site is plain HTML in `public/`. No build step. Total cost: domain, about $10-15 a year.

## 1. Make the forms send email (5 minutes)
1. Done: the access key is already in the four pages.
3. Free plan: 250 submissions a month, 30-day history. Confirm current limits on their pricing page. Keep important leads in your email, since the history is short.
4. Until the key is added, forms show a "not connected" message with your phone numbers.

## 2. Put the code on GitHub
Create a free repository and upload this folder (keep `wrangler.jsonc` and `public/` at the top level).

## 3. Publish on Cloudflare
1. Cloudflare dashboard, Workers & Pages, Create, import your GitHub repository.
2. Deploy command: `npx wrangler deploy`. Leave the build command empty.
3. Your site goes live at victory-elijah07.workers.dev. Every time you update GitHub, it republishes.
(Menu names change now and then. Cloudflare's "Workers static assets" docs have current steps.)

## 4. Connect elijahvictory.com
1. Register the domain at Cloudflare (Domain Registration). Check the price at checkout.
2. In your Worker: Settings, Domains & Routes, Add, Custom Domain, enter elijahvictory.com (and www.elijahvictory.com).
3. Wait a few minutes for the certificate.

## 5. Test before sharing the link
- Submit each of the four forms. Confirm the email arrives and both phone numbers work.
- Try the mortgage estimator with numbers you know.
- Look at every page on your phone.

## Before launch: confirm with your broker
- Disclosures and brokerage-identification wording required on the site and ads.
- Whether elijahvictory.com and the "Realtor®" usage are acceptable.
- That the privacy policy is acceptable to Holliday Real Estate (it was not written by a lawyer).
- Facts on the town pages (sources are listed on the page).
- Whether to add an Equal Housing notice if your brokerage requires one.

## Editing text
Open the page file in GitHub, click the pencil icon, change the text, commit. Cloudflare republishes.
