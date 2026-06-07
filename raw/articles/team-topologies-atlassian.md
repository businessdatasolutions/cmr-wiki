    DEVOPS TOPICS




Team Topologies
How four fundamental topologies influence a DevOps transformation.

       By Ian Buchanan, Atlassian Principal Solutions Engineer




   Try Compass for free
   Improve your developer experience, catalog all services, and increase software
   health.


      Try it free




Learn about the benefits of stream-aligned teams, and how they work with platform
teams, sub-system teams, and enabling teams to deliver value to customers.




Introduction to Team Topologies
Engineering teams are required to move faster than ever to deliver value to their
customers. The rise of cloud, SaaS, and always-on services means that customers
expect new features, fewer bugs, and 99.99% (or higher) up-time.

To keep pace with these demands, organizations adopted agile practices and, more
recently, DevOps practices, which promises faster time to market/lead time,
improvement deployment frequency, better team culture, and increased collaboration
across teams/ departments.

While adopting DevOps practices is easier said than done, the book Team Topologies
provides insightful ways organizations can build DevOps into their company, including
what sort of teams might be most effective. This book provides a starting point for
how Atlassian thinks about teams. Rather than reiterate their findings, we want to
share our own perspective on the team types.
The first step toward a DevOps transformation is to identify the organizational
structure in place. However, at any given company today, there are many different
team types, and in some cases, single teams taking on multiple roles and
responsibilities. This sprawl makes it hard for leadership to visualize the full
organizational landscape, and answer questions like:

     Do we have the right teams in place?
     Are we lacking capabilities in some areas that are not being addressed by any
     team?
     Do teams have the necessary balance between autonomy and support from
     other teams?

Development and operations leaders can better understand if the right teams are in
place by looking at their organization through the lens of Team Topologies. We
recommend reducing the number of team variations to four fundamental Team
Topologies that are easily digestible for both upper management and the actual team
members themselves:

     Stream-aligned team
     Platform team
     Complicated-subsystem team
     Enabling team

Keep in mind these team types take different forms depending on the size and
maturity of the company. In reality, a combination of more than one type of team, or a
team transforming into another, is often the best approach.




1. Stream-aligned team
Stream-aligned teams focus on a single, impactful stream of work. It can be a single
product or service, a single set of features, a single user journey, or a single user
persona. The team is empowered to build and deliver customer or user value as
quickly, safely, and independently as possible, without requiring hand-offs to other
teams to perform parts of the work.

Because stream-aligned teams work on the full spectrum of delivery, they are, by
necessity, closer to the customer and usually already agile. This team incorporates
customer feedback in development cycles, while maintaining software in production.

While stream-aligned teams are common at many software companies, other
organizations may be more familiar with team structures organized by function (i.e.
separate teams for engineering, design, QA), rather than the delivery stream.

Since the stream-aligned team is the most common team type in organizations, the
role of other teams is defined relative to stream-aligned teams. Stream-aligned teams
should regularly reach out to the following supporting teams (complicated subsystem,
enabling, and platform) to continuously improve the speed of delivery and quality of
their products and services.




2. Platform team
Platform teams enable stream-aligned teams to deliver work with substantial
autonomy. While the stream-aligned team maintains full ownership of building,
running, and fixing an application in production, the platform team provides internal
services that the stream-aligned team can use.

Platform teams create capabilities that can be used by numerous stream-aligned
teams, with little overhead. By optimizing a product, platform teams minimize
resources and cognitive loads of the stream-aligned team. This also benefits end-
users too, since platform teams can create a cohesive experience that spans across
different user experiences or products.

Here at Atlassian, platform teams build services used by all of our products (like
identity management) and are expected to provide documentation, support, and
consultation for stream-aligned teams.




3. Complicated-subsystem team
A complicated-subsystem team is responsible for building and maintaining a part of
the system that depends on specific skills and knowledge. Most team members must
be specialists in a particular area of knowledge to understand and make changes to
the subsystem.

The goal of this team is to reduce the load of stream-aligned teams who work on
systems that include or use the subsystem. With the complicated-subsystem team’s
expertise and capabilities, stream-aligned teams don’t have to build capabilities in
areas too complicated for their daily work. Team members from this team may have
specialized knowledge in certain microservices (i.e. a billing service), algorithms, or
even artificial intelligence.

A common pitfall is to embed specialists in every stream-aligned team who uses the
subsystem. While this may seem efficient, it’s ultimately not cost-effective and out of
scope for a stream-aligned team.




4. Enabling team
Stream-aligned teams are under constant pressure to deliver and respond to change
quickly, making it challenging to find time for researching, learning, and practicing new
skills.

An enabling team composed of specialists in a given technical (or product) domain
help bridge this capability gap. These teams focus on research and experimentation to
make informed suggestions about tooling, frameworks, and ecosystem choices that
affect the tool stack.

This gives stream-aligned teams time to acquire and evolve capabilities without
taking time away from their primary goals. The enabling team seeks to primarily
increase the autonomy of stream-aligned teams by growing their capabilities with a
focus on problems, rather than solutions.

If an enabling team does its job well, the team it assists should no longer need help
after a few weeks or so. The enabling team should never work on a permanent
dependency.




Are you a stream-aligned team?
The following questions should be asked to determine if you have a stream-aligned
team:

Does your team aim to produce a steady flow of features?

Mature teams release multiple times per week, and in some cases, multiple times per
day. In pursuit of this goal, mature teams should use continuous integration and
continuous delivery (CI/CD) to ship features frequently.

Is your team quick to change direction based on feedback (customer or internal)
from the latest changes?

It’s often best to use an experimental approach to product evolution. Mature DevOps
processes include automated testing to ensure quality code shipments. Yet
experimentation goes beyond simple unit or acceptance tests. You can ensure that
your products deliver the most value to customers by using feature flags to automate
roll-outs to a subset of users, alpha and beta releases to solicit and measure user
feedback and behavior, and qualitative continuous feedback via comments, support
tickets, and community forums.

Does your team have minimal hand-offs of work to other teams?

This should be true in two ways. Your team should be self-contained and work should
happen with immediate teammates to ensure fast delivery. Beyond work scope,
minimal hand-offs can also take the form of automated processes. Automating your
development cycle ensures that moving things along is a seamless process,
regardless if the next step is an action like an automated test or merge to main, or an
actual human.

Bonus points if….

Does your team have time to address code quality changes (a.k.a. “tech debt”) to
ensure changes are safe and easy?

Mature teams rely on trunk-based development and CI/CD practices to maintain their
codebase. Capacity planning should include dedicated time to address tech debt. Plus,
large-scale projects that address underlying infrastructure or platform issues should
receive as much attention as feature development.

Is your team evaluated by the right metrics?

Beyond how fast your team ships, it should also consider team-health and technical
quality metrics in their measures of success.

Regarding the last question around measurement, DevOps teams have traditionally
considered the four key DevOps Research and Assessment (DORA) metrics in their
definition of “success”:

     Deployment frequency - How often an organization successfully releases to
     production
     Lead time for changes - The amount of time it takes a commit to get into
     production
     Change failure rate - The percentage of deployments that cause a failure in
     production
     Time to restore service - How long it takes an organization to recover from a
     failure in production

In addition to these metrics specified by DORA, Atlassian found that high-performing,
stream-aligned teams also monitor these attributes:

     Balanced team - Your team has a diverse set of skills and perspectives
     Full-time owner - A full-time owner ensures that the nuclear team and cross-
     functional participants know who to ask questions to and how to make decisions
     related to projects owned by the team
     Shared understanding - There is a shared understanding of the requirements,
     along with the definition for values and metrics for success
     A focus on value and metrics - Your team has north stars that guide which tasks
     to tackle in order to move projects to release
     Proof-of-concept - Having a real artifact to spar and test assumptions with
     helps a team constantly iterate and improve
     Managed dependencies to maintain velocity - Understanding managed
     dependencies keeps blockers at bay and helps the team maintain velocity




In conclusion…
DevOps is not a destination, but a journey of constant improvement of tools, team
culture, and practices. If you’re new to DevOps, start by orienting your goals to deliver
value to customers. As you mature, add automation to your tools and processes. And
finally, when your team becomes advanced practitioners, incorporate observability to
ensure you’re monitoring, measuring, and improving on the right things.

If you’re just starting your journey to DevOps, learn best practices with our Beginner's
guide to DevOps. To put DevOps into practice, we recommend trying Open DevOps,
which provides everything teams need to develop and operate software. Teams can
build the DevOps toolchain they want, thanks to integrations with leading vendors
and marketplace apps. Try it now.




Recommended for you

   DevOps community

   Learn more




   DevOps learning path

   Learn more




   Get started for free

   Learn more
Company

Careers

Events

Blogs

Investor Relations

Atlassian Foundation

Press kit

Contact us




PRODUCTS



Rovo

Jira

Jira Align

Jira Service Management

Confluence

Loom

Trello

Bitbucket



See all products



RESOURCES



Technical support

Purchasing & licensing

Atlassian Community

Knowledge base

Marketplace

My account
Create support ticket




LEARN



Partners

Training & certification

Documentation

Developer resources

Enterprise services



See all resources




Copyright © 2026 Atlassian


Privacy policy

Your Privacy Choices

Terms

Impressum


    English   ▾
