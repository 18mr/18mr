---
layout: page
title: About
permalink: /about/
---
# About 18MR.org

18MillionRising.org (18MR.org) brings many disparate Asian American communities together online and offline to reimagine Asian American identity with nuance, specificity, and power. We are using this Asian American identity as the foundation to build a more just and creative world where our experiences are affirmed, our leadership is valued, and all of us have the opportunity to thrive.

Using technology and popular culture, we develop new ways for Asian Americans and our allies to collaborate, create new ways of being, and transform the world around us.

As a member of the Allied Media Projects Sponsored Projects Network, we also hold the [AMP Network Principles](https://www.alliedmedia.org/about/network-principles) as central to our work.

__Operating Principles__

_Who We Are, Where We’re From_

- __We do not see the Asian American identity as monolithic.__ As we build together, we highlight and celebrate the differences in our cultures, languages, and values while uplifting the principles that bring us together in the first place.
- __We understand that the intersections of multiple identities make many in our communities more vulnerable while making our solutions more sustainable:__ not only are we people of color, we are also transgender, women, Muslims, queers, working class or poor, disabled, and/or undocumented, just to name a few. In order to build a more just world, we must understand the ways in which these identities create barriers and opportunities in our organizing.

_Co-Conspirators Instead of Allies_

- __We acknowledge that the United States was founded on the genocide of native people and the labor of Black people forcibly brought to this continent through chattel enslavement.__ These truths underlie many of the large social dynamics we work to combat, and we acknowledge that we must fight our own complicity in anti-Black racism and settler colonialism. As communities of color in solidarity with other communities of color, we are committed to ending white supremacy.
- __We acknowledge the pervasive role capitalism has played in ripping our communities apart__ through mass incarceration, gentrification, deportation, climate change, and consumerism. We know that capitalism extracts value from all people and resources in its path, and we must adapt to dismantle, supplant, and replace it with sustainable alternatives.

_Learning, Innovating, Creating_

- __We believe that innovation happens every day in our communities as we struggle to survive and thrive,__ and recognize that this innovation represents a genuine effort to grapple with the biggest problems of our times. To honor this innovation, we focus on developing tools and tactics that are culturally resonant and build on the foundations our predecessors have laid.
- __We value experimental modes of work and learning-by-doing,__ where the lessons of our mistakes are embraced as part of the process of changing ourselves and the world. We do not treat people as disposable, but embrace the challenge of transformation. Self-reflexivity, self-awareness, and humility are core to making this learning possible.
- __We draw strength from the power of imagination, creativity, and radical play as superpowers that are a vital part of the human experience.__ We believe these superpowers are the keys to unlocking a just, sustainable future.
- __We make technology work for us, but we do not work for technology.__ Although the internet, social media, and other tools in our toolbox are incredibly powerful and can bring people closer together, we don’t rely on them to do our work. We engage critically with technology and believe that while we cannot turn our backs on it, we must also avoid fetishizing it and centering it – rather than people and communities – in our work.

_Changing Ourselves, Changing Society_

- __We work to not merely cater to the center, but to move the center.__ Our communities have historically been used as a racial wedge to drive people apart and perpetuate the subjugation of other people of color. We reject this model minority status and recognize that to move others in our communities toward this understanding, we need to do the hard work of revealing difficult truths. This requires a deep commitment to teaching; leading by example; refusing the path of least resistance; and offering concrete solutions to inspire systemic change

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

# Community Guidelines

Please remember that comments on 18MR.org are public and our audience includes everyone from ages 13 to 93. We ask that you curb crude language on our site and we reserve the right moderate comments that attack particular individuals or groups; are not in the spirit of civil discourse; are not relevant to the subject matter; or violate our privacy policy. We tend to be generous, but we simply ask that you veer away from attacking people towards and towards interrogating their ideas.

Discourse over dissing, as a rule. We're here to build community, and we hope you are, too.

<h1 id="contact">Contact Us</h1>

Direct general inquiries, including speaker requests for any of our current staff, can be sent to [info@18millionrising.org](mailto:info@18millionrising.org).

If you have a story or campaign to pitch, send it to us [here](http://www.18millionrising.org/pitch).

If you are having technical difficulties with this site, [report a bug or make a request here](https://github.com/18mr/18mr/issues).

If you are having technical difficulties with a petition, [report a bug or make a request here](https://github.com/18mr/action/issues).