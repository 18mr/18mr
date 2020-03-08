---
layout: page
title: About
permalink: about
---
# About 18MR

18 Million Rising (18MR) brings Asian American communities together online and offline to reimagine Asian American identity with nuance, specificity, and power. We are using this Asian American identity as the foundation to build a more just and creative world where our experiences are affirmed, our leadership is valued, and all of us have the opportunity to thrive.

Using technology and popular culture, we develop new ways for Asian Americans and our allies to collaborate, create new ways of being, and transform the world around us. We utilize digital-first advocacy tactics to elevate the voices of and mobilize our over 120,000 members to take action on issues that matter to them. We create meeting places online where young Asian Americans can deliberate together about what it means to be Asian American in the 21st century.


As a member of the Allied Media Projects Sponsored Projects Network, we also hold the [AMP Network Principles](https://www.alliedmedia.org/about/network-principles) as central to our work.

__Operating Principles__

_Who We Are, Where We’re From_

- __We do not see the Asian American identity as monolithic.__ We come from South, Southeast, and East Asian diasporas; we are multiracial; we come from many waves of immigration. As we build together, we highlight and celebrate the differences in our cultures, languages, and values while uplifting the principles that bring us together in the first place.
- __We understand that the intersections of multiple identities make many in our communities more vulnerable while making our solutions more sustainable:__ not only are we people of color, we are also transgender, women, Muslims, queers, working class or poor, disabled, and/or undocumented, just to name a few. In order to build a more just world, we must understand the ways in which these identities create barriers and opportunities in our organizing.

_Co-Conspirators Instead of Allies_

- __We acknowledge that the United States was founded on the genocide of native people and the labor of Black people forcibly brought to this continent through chattel enslavement.__ These truths underlie many of the large social dynamics we work to combat, and we acknowledge that we must fight our own complicity in anti-Black racism and settler colonialism. As communities of color in solidarity with other communities of color, we are committed to ending white supremacy.
- __We acknowledge the pervasive role capitalism has played in ripping our communities apart__ through mass incarceration, gentrification, deportation, climate change, and consumerism. We know that capitalism extracts value from all people and resources in its path, and we must adapt to dismantle, supplant, and replace it with sustainable alternatives.

_Learning, Innovating, Creating_

- __We believe that innovation happens every day in our communities as we struggle to survive and thrive,__ and recognize that this innovation represents a genuine effort to grapple with the biggest problems of our times. To honor this innovation, we focus on developing tools and tactics that are culturally resonant and build on the foundations our predecessors have laid.
- __We value experimental modes of work and learning-by-doing,__ where the lessons of our mistakes are embraced as part of the process of changing ourselves and the world. We do not treat people as disposable, but embrace the challenge of transformation. Self-reflexivity, self-awareness, and humility are core to making this learning possible.
- __We draw strength from the power of imagination, creativity, and radical play as superpowers that are a vital part of the human experience.__ We believe these superpowers are the keys to unlocking a just, sustainable future.
- __We make technology work for us, but we do not work for technology.__ Although the internet, social media, and other tools in our toolbox are incredibly powerful and can bring people closer together, we don’t rely on them to do our work. We engage critically with technology and believe that while we cannot turn our backs on it, we must also avoid fetishizing it and centering it – rather than people and communities – in our work.

_Changing Our Movements, Changing Society_

- __We work to not merely cater to the center, but to move the center.__ White supremacy has weaponized our communities as a racial wedge to drive people apart and perpetuate the subjugation of other people of color. We reject this model minority status and recognize that to move others in our communities toward this understanding, we need to do the hard work of revealing difficult truths. This requires a deep commitment to teaching; leading by example; refusing the path of least resistance; and offering concrete solutions to inspire systemic change within our communities as well as outside them in the broader society.

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

If you have a story or campaign to pitch, send it to us [here](http://www.18millionrising.org/pitch).

If you are having technical difficulties with this site, [report a bug or make a request here](https://github.com/18mr/18mr/issues).

If you are having technical difficulties with a petition, [report a bug or make a request here](https://github.com/18mr/action/issues).