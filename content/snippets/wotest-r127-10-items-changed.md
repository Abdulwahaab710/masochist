---
title: WOTest r127, 10 items changed
---

Replace signal handling mechanism with lower-level exception handling (at CoreServices level); this prevents the Crash Reporter application from showing up spuriously when WOTest intercepts a fault that would otherwise derail the testing process
