# Long Polling

## What is Long Polling?
Long Polling is a client–server communication technique where the client sends a request and the server holds the request open until new data is available (or a timeout occurs). Once the server responds, the client immediately sends another request.  

**One-liner:**  
> “In long polling, the server waits for data instead of the client repeatedly asking.”

---

## How Long Polling Works (Step-by-Step)
1. Client sends a request to the server.  
2. Server waits (does not respond immediately).  
3. When new data is available → server responds.  
4. Client receives the data.  
5. Client sends the next request instantly.  

**Timeline (Comparison with Short Polling):**

**Short Polling**  
Client → Request → Response (empty)  
(wait)  
Client → Request → Response (empty)  

**Long Polling**  
Client → Request ───────(waits)──────→ Response (data)  
Client → Request ───────(waits)──────→ Response (data)  

---

## Advantages
- ✅ Fewer unnecessary requests  
- ✅ Near real-time updates  
- ✅ Works over normal HTTP  

## Disadvantages
- ❌ Server keeps connections open  
- ❌ Harder to scale than WebSockets  
- ❌ Still not true real-time  

---

## When to Use Long Polling
- Basic chat applications  
- Notifications  
- Real-time updates without WebSockets  
- When WebSockets are not allowed  

---

## Comparison

**Long Polling vs Short Polling**

| Feature         | Short Polling        | Long Polling        |
|-----------------|-------------------|------------------|
| Server response  | Immediate          | Waits for data    |
| API calls        | Many               | Fewer             |
| Real-time        | ❌ No              | ⚠️ Almost         |
| Server load      | High               | Medium            |

**Long Polling vs WebSockets**

| Feature             | Long Polling             | WebSockets          |
|--------------------|------------------------|-------------------|
| Communication       | Request–response       | Full duplex        |
| Protocol            | HTTP based             | Persistent connection |
| Real-time           | Moderate               | True real-time     |
| Complexity          | Easier to implement    | More complex       |

**One-liner for interviews:**  
> “Long polling reduces unnecessary requests by allowing the server to respond only when data is available.”

---

## Common Interview Questions

### 🔹 Basic Questions (Must-know)
- What is long polling?  
- How does long polling work?  
- Why is long polling better than short polling?  
- Why is it called “long” polling?  
- Give a real-world use case of long polling.  

### 🔹 Intermediate Questions
- What happens if no data is available on the server?  
- What is timeout in long polling?  
- Is long polling real-time? Explain.  
- How does long polling reduce unnecessary requests?  
- Can long polling work over HTTP/HTTPS?  

### 🔹 Comparison Questions (Very Important)
- Long polling vs short polling  
- Long polling vs WebSockets  
- Long polling vs Server-Sent Events (SSE)  
- Why would you choose long polling over WebSockets?  

### 🔹 Backend / System Design Questions
- How does long polling affect server resources?  
- Is long polling scalable? Why or why not?  
- What happens if thousands of clients use long polling?  
- How do you handle connection drops in long polling?  
- How would you optimize a long polling system?  

### 🔹 Practical / Code-oriented Questions
- How do you implement long polling in JavaScript?  
- How does the client know when to send the next request?  
- How do you avoid duplicate responses in long polling?  
- How do you stop long polling?  
- What HTTP status codes are used in long polling?  

### 🔹 Tricky / Follow-up Questions (Senior-level)
- Is long polling stateful or stateless?  
- Can long polling cause memory issues on the server?  
- What happens if the server crashes during a long poll?  
- Why is WebSocket preferred over long polling at scale?  
- Does long polling block the server thread?  

---

## Interview-Ready One-Liner
> “Long polling allows the server to hold client requests until data is available, reducing unnecessary network calls compared to short polling.”
