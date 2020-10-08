---
title: "Understanding JavaScript at a deeper level: Objects"
image:
description: "Testing"
---

### Setup

To set up for such a store for an application, we can create a new TypeScript file, such as `clicks.store.ts` , and use the `createStore` function exposed by the Stencil Store.

```javascript
import { createStore } from "@stencil/store";

const { state } = createStore({
  clicks: 0,
});

export default { state };
```
