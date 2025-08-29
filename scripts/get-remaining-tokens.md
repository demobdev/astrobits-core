# Getting Remaining API Tokens for AstroBits Core

## 1. Supabase Access Token

### Steps:
1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Navigate to your project: `whcjmdrrqamcoqtonend`
3. Go to **Settings** → **Access Tokens**
4. Click **Generate new token**
5. Give it a name like "AstroBits Core MCP"
6. Copy the token and update your `.env.local` file

### Update .env.local:
```bash
# Replace in .mcp.json
"SUPABASE_ACCESS_TOKEN": "your_actual_token_here"
```

## 2. Stripe Keys

### Steps:
1. Go to [Stripe Dashboard](https://dashboard.stripe.com)
2. Navigate to **Developers** → **API Keys**
3. Copy your **Publishable Key** and **Secret Key**
4. For webhook secret, go to **Webhooks** → **Add endpoint**

### Update .env.local:
```bash
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

## 3. GitHub Token

### Steps:
1. Go to [GitHub Settings](https://github.com/settings/tokens)
2. Click **Generate new token (classic)**
3. Select scopes: `repo`, `workflow`, `admin:org`
4. Copy the token

### Update .env.local:
```bash
GITHUB_TOKEN=ghp_...
```

## 4. Vercel Token

### Steps:
1. Go to [Vercel Dashboard](https://vercel.com/account/tokens)
2. Click **Create Token**
3. Give it a name like "AstroBits Core"
4. Select scopes: `read`, `write`
5. Copy the token

### Update .env.local:
```bash
VERCEL_TOKEN=...
```

## 5. Notion Integration

### Steps:
1. Go to [Notion Integrations](https://www.notion.so/my-integrations)
2. Click **New integration**
3. Give it a name like "AstroBits Core"
4. Select your workspace
5. Copy the **Internal Integration Token**

### Update .env.local:
```bash
NOTION_API_KEY=secret_...
NOTION_DATABASE_ID=your_database_id_here
```

## 6. Test All Connections

Once you have all tokens, test them with MCP Inspector:

```bash
# Test each service
npm run mcp:test-supabase
npm run mcp:test-notion
npm run mcp:test-context7
npm run mcp:test-sentry
npm run mcp:test-memory
```

## Security Notes

- Never commit `.env.local` to version control
- Use environment-specific tokens (test vs production)
- Rotate tokens regularly
- Use least-privilege access for each service
