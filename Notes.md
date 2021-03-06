Class is broken into 4 parts, the basics (SOLID), creational patterns, 
structural patterns, and behavioral patterns.

# SOLID

**Single responsibility**: 
- Each class should have a single responsibility. 
- A class should only have one reason to change. 
- *Separation of concerns* - different classes handling different, independent, tasks/problems.

**Open Closed Principal**: 
- Rather than modify class (add new properties/methods) extend and create new classes if possible.

**Liskov Substitution Principal**: 
- You should be able to substitute a base type for a subtype. (ie) If you have some method that takes a base class, it should equally be able to take its' children (exetended classes)

**Interface Segrigation Principal**: 
- Do not put too much into an interface
- Split up interfaces
- *YAGNI* You Ain't Going to Need It 
- Not always practical in Javascript due to duck typing.

**Dependency Inversion Principal**: 
- High-level modules should not rely on Low-Level modules (like data that should be private), but rather abstractions. 
- You would typically use abstract classes or interfaces, but Javascript does not nicely do either.

**Principal of least surprise**: 
- Dev/user should not get unexpected or undocumented results. 
- Things should make sense and be predictable.)

---

# Creational Patterns
1. Deal with creation (constructions) of objects. 
1. Explicit (constructor) vs implicit (DI, reflection, etc)
1. Wholesale (single statement) vs Piecewise (step-by-step)

- builder
- Factories
  - Abstract Factory
  - Factory Method
- Prototype
- Singleton

# Structural Patterns
1. Concerned with structure (eg class members)
1. Many patterns are wrappers that mimic the underlying class' interface.
1. Stress the importance of good API design

- adapter
- bridge
- composite
- decorator
- facade
- flyweight
- proxy

# Behavioral Patterns
1. They are all differnt; no central theme

- chain of responsibility
- command
- interpreter
- iterator
- mediator
- momento
- observer
- state
- strategy
- template Method
- visitor
