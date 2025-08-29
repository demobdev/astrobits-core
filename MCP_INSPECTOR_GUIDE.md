# MCP Inspector Guide for AstroBits Core

## What is MCP Inspector?

MCP Inspector is a powerful debugging and testing tool for Model Context Protocol (MCP) servers. It allows you to:
- Connect to MCP servers
- Test tool calls
- Inspect server responses
- Debug connection issues
- Monitor server performance

## How to Use MCP Inspector

### 1. Installation
MCP Inspector is typically available as a web application. You can access it at `localhost:6274` when running locally.

### 2. Basic Setup

#### Transport Type
- **STDIO**: For local MCP servers (like Supabase CLI-based servers)
- **HTTP**: For remote MCP servers (like Notion, Context7)
- **WebSocket**: For real-time connections

#### Command Configuration
For local servers, specify the command and arguments:
```
Command: npx
Arguments: -y @supabase/mcp-server-supabase@latest --read-only --project-ref=whcjmdrrqamcoqtonend
```

### 3. Environment Variables
Set up the required environment variables for each service:

#### Supabase
```
SUPABASE_ACCESS_TOKEN=your_supabase_access_token_here
```

#### Context7
```
CONTEXT7_API_KEY=ctx7sk-d3662c57-b968-4883-889d-0ceeb2081c3a
```

#### Sentry
```
SENTRY_DSN=https://27f3b7cfb3e6b6a824a8aaa60b2c918c@o4509925548556288.ingest.us.sentry.io/4509925549277184
SENTRY_ORG=wvfm-labs
SENTRY_PROJECT=javascript-nextjs
```

### 4. Testing Your Connections

#### Testing Supabase MCP
1. Set transport type to STDIO
2. Use command: `npx -y @supabase/mcp-server-supabase@latest --read-only --project-ref=whcjmdrrqamcoqtonend`
3. Add environment variable: `SUPABASE_ACCESS_TOKEN`
4. Test with tool calls like:
   - `list_tools`
   - `list_resources`
   - `read_resource` (for database tables)

#### Testing Notion MCP
1. Set transport type to HTTP
2. Use URL: `https://mcp.notion.com/mcp`
3. Test with tool calls like:
   - `search` (search your workspace)
   - `fetch` (get page content)
   - `create-pages` (create new pages)

#### Testing Context7 MCP
1. Set transport type to HTTP
2. Use URL: `https://mcp.context7.com/mcp`
3. Add environment variable: `CONTEXT7_API_KEY`
4. Test with tool calls like:
   - `search` (search libraries)
   - `get_library_info` (get library details)

#### Testing Sentry MCP
1. Set transport type to STDIO
2. Use command: `npx -y @sentry/mcp-server@latest`
3. Add environment variables for Sentry
4. Test with tool calls like:
   - `get_issues` (get error reports)
   - `get_projects` (list projects)

#### Testing Memory MCP (OpenMemory)
1. Set transport type to STDIO
2. Use command: `npx -y @openmemory/mcp-server@latest`
3. Add environment variable: `OPENMEMORY_API_KEY=om-4b5ocxdarw5edzllog7694j8it7hyt7q`
4. Test with tool calls like:
   - `store_memory` (store information)
   - `retrieve_memory` (retrieve stored information)
   - `search_memories` (search stored memories)
   - `delete_memory` (remove stored information)

## Common Issues and Solutions

### Connection Refused
- Check if the MCP server is running
- Verify the URL/command is correct
- Ensure environment variables are set

### Authentication Errors
- Verify API keys are correct
- Check if tokens are expired
- Ensure proper permissions

### Tool Call Failures
- Check the tool parameters
- Verify the tool exists in the server
- Review server logs for errors

## Advanced Features

### History
MCP Inspector keeps a history of all tool calls and responses, allowing you to:
- Review previous interactions
- Debug failed calls
- Understand server behavior

### Server Notifications
Monitor real-time notifications from MCP servers for:
- Connection status
- Error messages
- Performance metrics

### Authentication Settings
Configure authentication for different MCP servers:
- API keys
- OAuth tokens
- Custom authentication methods

## Best Practices

1. **Start Simple**: Begin with basic tool calls like `list_tools`
2. **Test Incrementally**: Add complexity gradually
3. **Monitor Logs**: Watch for error messages and warnings
4. **Use History**: Review previous successful calls
5. **Secure Credentials**: Never commit API keys to version control

## Integration with AstroBits Core

Your `.mcp.json` file is configured with all the services. You can use MCP Inspector to:
- Test each service individually
- Debug integration issues
- Validate tool functionality
- Monitor performance

## Next Steps

1. Test each MCP server connection
2. Verify tool functionality
3. Set up monitoring and alerts
4. Document successful configurations
5. Create automation scripts for common tasks
