# Short Polling

## What is Short Polling?
Short Polling is a client–server communication technique where the client repeatedly sends requests to the server at fixed intervals to check if new data is available.  

- The server responds immediately, even if there is no new data.  
- The client waits for a short interval and polls again.  

---

## How Short Polling Works
1. Client sends a request to the server.  
2. Server responds immediately with data (or “no update”).  
3. Client waits for a fixed time interval.  
4. Client sends another request.  
5. Repeat continuously.

**Timeline Example:**

| Time  | Client → Server        | Server Response      |
|-------|----------------------|--------------------|
| 0s    | /getData             | Old Data           |
| 2s    | /getData             | Old Data           |
| 4s    | /getData             | New Data           |

---

## Advantages
- Simple to implement  
- Works with standard HTTP  
- No special server setup needed  

---

## Disadvantages
- Wastes bandwidth due to repeated requests  
- Puts load on server  
- Not real-time (delayed until next poll)  
- Does not scale well for multiple clients  

---

## Use Cases
- Simple notification systems  
- Low traffic apps  
- When real-time is not critical  

---

## Comparison

| Feature         | Short Polling        | Long Polling        | WebSockets        |
|-----------------|-------------------|------------------|----------------|
| Network calls    | Repeated requests | Server waits      | Persistent     |
| Real-time       | No                 | Better            | Yes            |
| Complexity      | Low                | Medium            | High           |
| Scalability     | Poor               | Medium            | High           |

---

## Common Interview Questions

### 🔹 Basic Questions
- What is short polling?  
- How does short polling work?  
- Why is it called “short” polling?  
- Give a real-world example of short polling.  
- Where is short polling used?  

### 🔹 Intermediate Questions
- What are the disadvantages of short polling?  
- How is short polling different from long polling?  
- How is short polling different from WebSockets?  
- Is short polling real-time? Why or why not?  
- What happens if data does not change on the server?  

### 🔹 Code & Practical Questions
- How would you implement short polling in JavaScript?  
- What is the role of `setInterval` in short polling?  
- How do you stop short polling?  
- What happens if polling interval is very small?  
- How would you handle errors in short polling?  

### 🔹 Backend / System Design Questions
- Why is short polling not scalable?  
- How does short polling affect server load?  
- When would you choose short polling over WebSockets?  
- How can short polling be optimized?  
- What alternatives exist to short polling?  

### 🔹 Comparison Questions
- Short polling vs Long polling  
- Short polling vs Server-Sent Events (SSE)  
- Short polling vs WebSockets  

### 🔹 Tricky / Follow-up Questions
- Can short polling cause performance issues?  
- What happens if multiple clients use short polling?  
- Is short polling stateful or stateless?  
- Does short polling require persistent connections?  
- Can short polling work over HTTP/HTTPS?  

---

## Event Loop vs Short Polling
- ❌ Event Loop is **not short polling**  
- Event Loop: JS runtime mechanism managing async tasks  
- Short Polling: client-server repeated network requests  
- Key distinction: Event Loop does not involve network communication  

---

## Interview-Ready One-Liner
> “Short polling is a client–server communication pattern where the client repeatedly requests the server at fixed intervals to check for updates, even if no new data is available.”
