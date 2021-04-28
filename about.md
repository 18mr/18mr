---
layout: page
title: About
permalink: /about/
---

<h1>About 18MR</h1>

<img src= "/static/images/about.png" hspace="30px" style="float: right; width: 40%; height: 40%">

<h3>18 MILLION RISING CONNECTS THE POWER OF ASIAN AMERICA TO DIGITAL FIRST ORGANIZING.</h3>

<p> When 18 Million Rising (18MR) launched in 2012, there were approximately 18 million Asian Americans in the United States, representing nearly 6% of the total population and growing faster than any other racial group. Despite that, Asian Americans were, and remain, one of the most politically under–represented communities.<br></p>

<p>In 2012 young Asian Americans were yearning for a progressive political home. Our organization was created in response to the enormous untapped opportunity to educate, organize, and mobilize young Asian Americans. In a time when others ignored and erased our political power, we built an online community to foster belonging in a rapidly-changing United States. We believe that we deserve to live in a world where we can thrive. Organizing young Asian Americans is key to building a more just world.<br></p>

<p>As part of the East, Southeast and South Asian diasporas, our communities have come from many waves of immigration to the U.S. Many of us are physically isolated because our communities have been ripped apart through incarceration, gentrification, deportation, climate change, state violence, and consumerism. Creating community on the Internet has helped young Asian Americans close these gaps. For us the Internet is a place where we come together to create culture, collaborate, and build power. <br></p>

<p>Since 2012, our online and offline advocacy and cultural campaigns have highlighted the struggles of Asian American communities while celebrating our resilience. Using digital-first organizing, 18MR responds to issues of the current political moment. We mobilize our people to speak up against injustice and take action. From policy change to shifting narratives, 18MR helps define the culture of Asian America today.</p>

<h1 id="staff">Our Staff</h1>

<ul class="rig">
{% for weight in (1...site.staff.size) %}
{% for staff in site.staff %}
{% if staff.weight == weight %}
	<li>
		<img src="{{ staff.photo }}">
		<h2>{{ staff.name }}</h2>
		<h3>{{ staff.title }}</h3>
	</li>
{% endif %}
{% endfor %}
{% endfor %}
</ul>


# [Community Guidelines](#guidelines)

The 18MR online community is built by all of us as we participate in it -- not just staff, but also members, co-conspirators, and collaborators. By participating in the 18MR community online, you agree to the following expectations, rights, and responsibilities:

- __We use our shared online spaces to build connection, community, and collaboration in service of movements for collective liberation.__
- __We use our online spaces to engage in good-faith dialogue about ideas and approaches to building a just world.__ We think disagreement can yield learning. Our community is interested in productive dialogue, where good-faith questions are welcome. And your thoughtful insights in response are invited as well.
- __We are all here to learn.__ That includes our team. None of us are perfect and we’re all on our own journeys, but that’s part of why we strive to build and maintain a healthy community -- we can only learn in relationship with one another.
- __We do not welcome speech that is likely to harm other community members, regardless of intent.__ Even if you didn’t intend for your comment to be harmful, it might be. Our team takes pains to ensure that harmful language, such as racial/ethnic slurs, transphobic jokes, or body shaming, is kept out of our comments. This is to ensure that people feel welcome, regardless of their identity.
- __We do not tolerate harassment and other harmful behavior.__ This includes spamming, trolling, harassment, stalking (including combing through past threads to pull out comments a person has made in the distant past, on unrelated threads), doxing, or other practices that target an individual and potentially endanger their mental or physical wellbeing.

_Moderation Practices and Norms_

Generally speaking we are liberal about our moderation practices. We believe in allowing individuals to learn from conversation, and that those conversations often enrich the community by allowing for deliberation and dialogue with others who are unlike ourselves.

Comments and posts that violate our community agreements are subject to removal. Accounts and individuals who repeatedly violate them, or clearly have bad faith/harmful motives may be blocked, banned, or reported to the social media platform.

## [Community Guidelines for Offline Gatherings](#offline)

By RSVPing, attending, and participating in an 18MR event, you agree to the following expectations, rights, and responsibilities:

- __We engage with each other in good faith, with the intention to build, understand, and connect.__ We seek to be supportive, kind, and thoughtful about how we show up in the space, and our impact on others. We communicate clearly and check in with each other when things get challenging.
- __We work together to pursue the goals of the gathering -- whether it’s a happy hour or a conference workshop, we’re all here for similar reasons.__ We establish and honor ground rules for facilitated events together.
- __We seek positive, enthusiastic consent at multiple levels.__ We all agreed to be here, but not everyone has the same expectations for continuing the conversation. Whether it’s exchanging phone numbers or giving a supportive hug, we respect one another’s boundaries and needs in our relationships.
- __We ask for consent to photograph or document your participation.__ You can also contact 18MR at any time in the future to have your likeness removed from our website or social media accounts.

<h1 id="contact">Contact Us</h1>

Direct general inquiries, including speaker requests for any of our current staff, can be sent to [info@18millionrising.org](mailto:info@18millionrising.org).

If you are having technical difficulties with this site, [report a bug or make a request here](https://github.com/18mr/18mr/issues).

If you are having technical difficulties with a petition, [report a bug or make a request here](https://github.com/18mr/action/issues).