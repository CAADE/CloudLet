.. _Home:

Cloudlet Overview
=================

.. _C3: http://c3.readthedocs.io

Cloudlets represent an architecture of federated cloud that have a CMP+Automation+PaaS+CloudOS bundle as described
in the C3_ architecture. The architecture targets cloud operations
managers and should be as transparent to the end user and developer as possible.

High Level Use Case
-------------------

* :ref:`UseCase-Manage-Cloudlet` - Manage Cloudlets to Cloud helps setup the federation of clouds.
* :ref:`UseCase-Manage-Policies` - Manage policies that apply to the federation and to specific clouds or data centers
* :ref:`UseCase-Manage-Services` - Register a service in the cloud federation.
* :ref:`UseCase-Use-Service` - Use a service in the federation. This could use a service in the local or one of the remote clouds.

.. image:: UseCases/UseCases.png

Users
-----

* :ref:`Actor-Application-Developer`
* :ref:`Actor-Operations-Manager`
* :ref:`Actor-Stack-Developer`

Logical Architecture
--------------------

The Cloudlet Architecture contains a small set of services that establishes a federation of cloud by standardizing on a
common CMP layer from the C3_ architecture. Each Cloud will
a CloudletManager Service running that will help establish the federations between the clouds. Coordination between the
Clouds in the Federation will be handled by a set of services that give the federation connectivity.

.. image:: Architecture.png

* :ref:`SubSystem-Trust-Manager` - Manages Securee keys in TPMs across multiple data centers.
* :ref:`SubSystem-Cloudlet-Manager` - Each Cloud Has a Cloudlet manager that becomes part of the Federation
* :ref:`SubSystem-Data-Coordinator` - Coordinates data between Clouds
* :ref:`SubSystem-Federated-Orchestrated-Cloud` - Federated Orchestrated to schedule service requests acrosss multiple clouds
* :ref:`SubSystem-Identity-Manager` - Manages Identity across multiple clouds
* C3_ - Common Cloud Core including a Cloud Management Platform

Process Architecture
--------------------

.. image:: Solution/Process.png

Deployment model
----------------

The Cloudlet architecture should be as light weight as possible and should integrate existing
infrastructure and systems with minimal impact on the current system. Existing C3_
installations are used to handle the heavy lifting in the system. The C3 Architecture includes
Cloud Management Platform, Automation Framework & Platform as a Service.

The Cloudlet Architecture has a :ref:`SubSystem-Cloudlet-Manager` is that placed as a connectivity layer between the C3 and the
Federatated Connectivity. The connectivity gives all of the functionality that is needed to federate the different C3
systems together. This let's the C3 operate independently from other C3(s). Allowing for them
to operate in a disconnected or semi-connected state.

.. image:: Solution/Deployment.png


Trusted Cloudlets
-----------------

Trusted Cloudlets give the ability to set up a trusted federation of cloud and to segment that federation
with geo fencing technology using CIT.

In this example Each cloud has a geo fenced data set that can be shared with other clouds but not all of the clouds.

.. image:: Architecture.png

Physical Architecture
---------------------

The goal of the architecture is to connect multiple clouds together that are scattered across an organization.
This could be physically as well as logically. There is the concept of a base Cloud that could offer multiple
clouds and remote clouds named cloudlets.


.. image:: Solution/Physical.png

