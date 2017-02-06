# Cloudlet Architecture

The Cloudlet architecture is a reference architecture that targets federated clouds across multiple locations 
or co-located data centers. The purpose of the architecture is to show how to connect multiple distributed clouds
together using a federated pattern. This architecture is built on top of the [CAADE](https://github.com/CAADE/Caade/blob/master/README.md) architecture. 

This repository contains the design and a simple interactive reference architecture of the design.
The reference architeture is written using [sailsjs](http://sailsjs.org/) a nodejs MVC framework.


## Design
The design/spec of CAADE is presented in the ./design directory and can be accessed [here](design/README.md)

The design uses [plantuml](http://plantuml.com/) and [markdown language](https://guides.github.com/features/mastering-markdown/)
to document the architecture.

Plantuml is a text based language that lets you describe UML diagrams. 
All of the plantuml graphic files are shown in the *.md (markdown language files). 
In order to see the graphical representation of the uml files you have to generate *.png files.
To generate the graphic files (*.png) for the plantuml files (*.puml) do the following:
```
# npm run-script design
```


## Application
TBD

