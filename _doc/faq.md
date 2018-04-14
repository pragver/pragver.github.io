---
title: FAQ
excerpt: Frequently asked questions
icon:
  name: icon_lifesaver
color: purple
---

{: .question}
### *&nbsp;*{: .fa .fa-question-circle} Isn't **PragVer** just **SemVer** with one more digit?

{: .answer}
For the most part, yes. **PragVer** is conceived as a superset and tries to stay
compatible with the spirit of **SemVer**. On the other hand, the specification
tries to be a bit more abstract so that it can be used for other types of
artifacts, apart from software APIs.


{: .question}
### *&nbsp;*{: .fa .fa-question-circle} Is **SemVer** fundamentally flawed?

{: .answer}
Not at all. **SemVer** is a wonderful versioning schema and you may totally use
it if you don't feel the need to have an additional semantic level for your
specific artifact from the beginning. You can decide to adhere to **PragVer** at
a later point of time, if you think it would be more useful.


{: .question}
### *&nbsp;*{: .fa .fa-question-circle} Doesn't **SemVer** discourage rapid development and fast iteration?

{: .answer}
Not exactly. **SemVer** foresees an initial development phase where "anything
may change at any time". Major version zero (<tt>0.y.z</tt>) is reserved for
this purpose. There are some problem with this approach though:

1. Your artifact must be considered unstable during this phase of rapid
   development.
2. You are not supposed to go back to that phase once you reach <tt>1.0.0</tt>.
3. Versions <tt>0.y.z</tt> are not really *semantic* because they are considered
   a special case in which you don't need to follow the specification.

**PragVer** doesn't promote the idea that incompatible changes should be
introduced *lightly*, but it won't get in the way of the evolution of your
artifact either, even if your releases need to be frequently
backwards-incompatible.


{: .question}
### *&nbsp;*{: .fa .fa-question-circle} How do I know if my releases have reached enough maturity or stability?

{: .answer}
You should probably already be at version <tt>1.0.0.0</tt> if:

- Your artifact is being used in production.
- You have a stable API on which users have come to depend.
- You're worrying a lot about backwards-compatibility.


{: .question}
### *&nbsp;*{: .fa .fa-question-circle} What do I do if I accidentally publish a *minor release* that contains backwards-incompatible changes?

{: .answer}
As soon as you realize that you've broken the specification, fix the problem and
publish a new *minor release* that corrects the problem and restores backwards
compatibility. Even under this circumstance, it is unacceptable to modify the
released contents. If it's appropriate, document the offending release (for
example, mark it as deprecated) and inform your users of the problem so that
they are aware of the offending version identifier.


{: .question}
### *&nbsp;*{: .fa .fa-question-circle} What should I do if I update the dependencies without adding any external changes to the artifact itself?

{: .answer}
That would be considered backwards-compatible, since it does not affect the
consumers of the artifact. Determining whether the changes are *corrections* (or
any other type of alterations) depends on whether you updated the dependencies
in order to fix incorrect features or to introduce new functionality. Usually
additional changes are required for the latter instance, in which case it's
obviously a *minor release*.


{: .question}
### *&nbsp;*{: .fa .fa-question-circle} What if I inadvertently alter the artifact in a way that is not compliant with the version number change?

> For example, a *patch release* incorrectly contains major breaking changes.

{: .answer}
Use your best judgment. If you have a huge audience that will be drastically
impacted by changing the behavior back to what the artifact intended, then it
may be best to publish a *major release*, even though the fix could strictly be
considered a *patch release*.


{: .question}
### *&nbsp;*{: .fa .fa-question-circle} How should I handle deprecating functionality?

{: .answer}
Deprecating existing functionality is a normal part of the evolution of an
artifact. When you deprecate part of the existing features, you should:

1. Update your documentation to let users know about the change.
2. Publish at least one new *minor release* with the deprecation in place, so
   that users can smoothly transition.
3. Publish a new *major release* that removes completely the deprecated
   functionality.


{: .question}
### *&nbsp;*{: .fa .fa-question-circle} Do **PragVer** or **SemVer** have a size limit on the version string?

{: .answer}
No, but use good judgment. A 255 character version string is probably overkill,
for example. Also, specific systems may impose their own limits on the size of
the string.
