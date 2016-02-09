---
layout: page
title: About
permalink: /about/
---
#About 18MR.org

When we launched in September 2012, there were approximately __18 million Asians and Pacific Islanders in the United States__, representing nearly 6% of the total population and growing faster than any other racial group. Despite that, Asian Americans remain one of the most politically under–organized, under–engaged, and under–represented constituencies: only 55% of Asian American citizens of voting age are registered to vote — the lowest rate of all races. 

18MR.org was founded to promote AAPI civic engagement, influence, and movement by leveraging the power of technology and social media. __For the past three years, we've convened a network of creative, tech-savvy, and passionate individuals and organizations working in and with AAPI communities in every U.S. state and territory.__ Our vision of engaged AAPI communities began with, but doesn’t end with, the ballot box: it also includes year-round civic activity locally and nationally, holding corporations accountable, building interracial coalitions, and developing our shared identities.

We’re agile, inspired, and create opportunities by bringing diverse partners into unlikely coalitions. __21st century community power can be built through smart tech and good organizing, and our campaign wins and vision are testament to how we can bring them together to advance rights and justice in our communities, in our country, in our nations of origins, and beyond.__

We pushed tech giants to do better. We elevated AAPI voices in crucial fights to save the internet. We forced mainstream media to represent our narratives more accurately and completely. We helped develop skills and analysis with emerging AAPI leaders. We hacked cutting-edge tools that make raising your voice against injustice more accessible than ever. __And we’re just getting started.__

The next couple years hold incredible potential for rapid change. We’re ready to face the challenges head-on, and we want you to be a part of building the future together. __Welcome to 18MR—we’re activating Asian America.__

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

<h1 id="contact">Contact Us</h1>

Direct general inquiries, including speaker requests for any of our current staff, can be sent to [info@18millionrising.org](mailto:info@18millionrising.org).

If you have a story or campaign to pitch, send it to us here.

If you are having technical difficulties with this site, [report a bug or make a request here](https://github.com/18mr/18mr/issues).

If you are having technical difficulties with a petition, [report a bug or make a request here](https://github.com/18mr/action/issues).