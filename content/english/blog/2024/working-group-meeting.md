---
title: "SCATA Working Group Meeting 2024"
meta_title: ""
description: "this is meta description"
date: 2024-02-26T05:00:00Z
image: "/images/colony-piccadilly.jpg"
categories: ["Reports"]
author: "JP Lomas"
tags: ["meeting", "working group"]
draft: false
---

_The SCATA Chairman reports from the 2024 SCATA Working Group Meeting held in Manchester._ 

#### 1. FHIR for Anaesthesia Records (GF)
##### a. IG

GF [presented a history and roadmap to date](https://docs.google.com/presentation/d/1eHU4LPKZwgKBFImnqTpOgcmTAsk69wNd2bpNwBtuEsA/view)
of the FHIR IG for intra-procedural anaesthesia records along with recent updates and forthcoming work.
The scope is currently defined as “Informative” (I) within HL7. “Draft standard for trial use” (DSTU) and “normative” (N) are the progressive
stages towards standardisation. There is a need for institutions of status to trial in order to move from I to DSTU.

If we can achieve support, we would approach the HL7 Steering Committee and request modify status of project.

However, the IG needs substantially more fleshing out before we get to this.

Once we get towards completion, we should approach institutions to gain support for an application to move to DSTU.

The challenges were discussed around medication administration and procedures involving non-electromechanical devices. e.g. inhalation
agents and gas flow delivered via vaporiser and breathing systems, TIVA/TCI.

Grant ran through some of the examples for IV cannula and arterial line and feedback was given around ported versus un-ported intravenous
devices and needle-free connector attachments. Comment was also made around device placement: ECG analysis used in addition to US.

Device properties and recording these was discussed.  Comparison with automobile industry was made including exploration of possible side project
with an industry partner.

GF outlined next steps:

- continue with IG build on GitHub using existing tooling
- diagramming for complex use cases
- connect with VA project in the US
- possible demo/sandbox app as a companion to the IG

##### b. DAM

A domain analysis model (DAM) is the foundation resource that others will refer back to, e.g. an IG will refer back to a DAM.

Grant presented the work and changes on the [DAM to v1.1](https://docs.google.com/document/d/1lN0GQM1ZyRJ9DRjdn8kx9_C3oylFzRlb9Hd8blNd6dU/view)
and comments on the steps for the major procedure example (AAA repair).

Feedback was given around glycaemic control +/- sampling of ABG from arterial line and current
neuromuscular and depth of anaesthesia monitoring standards.  

#### 2. Anaesthetic Records: an evaluation of their variation across England (RF)

RF presented [his paper on Anaesthetic Records and their variation across England](https://slack-files.com/T2D057MCZ-F0626489HA9-b49043c3c1).  This included the argument for standardisation or the creation of a minimal dataset.

GF discussed this was a useful addition to the available international literature.
MG felt the non-response from departments was poor, and wondered if it reflected poor design/implementation in those departments.
CR discussed some of the logistical issues as a result of migrating to an EAR system as part of a trust-wide EPR deployment.
GF said there was a minimum dataset for US anaesthesia providers.  It is not intended as an exchange of a data, but to ensure the care provider is correctly paid and as such is very exhaustive - almost to a fault.
MH suggested international standards from Australia/NZ as a benchmark.
JPL wondered that in the absence of any thrust to create guidelines or standards, SCATA should publish consensus standards based on Rich’s work and the available literature. “Minimum dataset for an anaesthetic record”. This could include a checklist for both paper/electronic records.

Next steps:

- Standards work

#### 3. Deployment of Epic at Guy's & St. Thomas - lessons for open standards (CR)

CR gave a broad presentation on this large piece of informatics work and outlined
the overall project timelines. Infrastructure, training, shadow charting, clinical documentation,
downtimes, and migration of data were all outlined alongside issues experienced along the way and how
problems were solved.

#### 4. Website & branding work (JPL)

Preview of website, login and branding work presented.

#### 5. Representation of Positioning Data in Perioperative Records (MG)

MG presented “Terminology for per-operative anaesthetic records - what’s the problem?”, which he self-described as a narrative for grumpiness...

#### 6. Logbook standards work (JPL)

JPL presented work to date with Rob Penders and received helpful input and comment from the group.
