wait Rendering static HTML...
FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory
 1: 00007FF60498D1BA v8::internal::GCIdleTimeHandler::GCIdleTimeHandler+4506
 2: 00007FF604967F96 node::MakeCallback+4534
 3: 00007FF604968910 node_module_register+2032
 4: 00007FF604C826FE v8::internal::FatalProcessOutOfMemory+846
 5: 00007FF604C8262F v8::internal::FatalProcessOutOfMemory+639
 6: 00007FF604E68E24 v8::internal::Heap::MaxHeapGrowingFactor+9620
 7: 00007FF604E5FE06 v8::internal::ScavengeJob::operator=+24550
 8: 00007FF604E5E45C v8::internal::ScavengeJob::operator=+17980
 9: 00007FF604E671A7 v8::internal::Heap::MaxHeapGrowingFactor+2327
10: 00007FF604E67226 v8::internal::Heap::MaxHeapGrowingFactor+2454
11: 00007FF604F914C7 v8::internal::Factory::NewFillerObject+55
12: 00007FF60500E6B6 v8::internal::operator<<+73494
13: 000001ADA665C5C1
npm ERR! code ELIFECYCLE





<!-- Please don't delete this template or we'll close your issue -->
<!-- Before creating an issue please make sure you are using the latest version of VuePress. -->

<!-- Please confirm you will submit an issue. -->
<!-- Issues which contain questions or support requests will be closed. -->
<!-- (Update "[ ]" to "[x]" to check a box) -->

- [ ] I confirm that this is an issue rather than a question.

<!-- Please ask questions via following several ways. -->
<!-- https://vue-land.js.org/ -->
<!-- https://forum.vuejs.org/ -->
<!-- https://stackoverflow.com/questions/ask?tags=vuepress -->

## Bug report

#### Steps to reproduce

<!-- If you are reporting a bug that can ONLY be reproduced on your repository, PLEASE provide this repo link. That takes guessing work out of the way and saves us time. -->

<!-- If your repo isn't public, you can use `codesandbox` or `yarn create vuepress` to create a minimal reproduction -->

#### What is expected?

#### What is actually happening?

#### Other relevant information

- Output of `npx vuepress info` in my VuePress project:
