Class is broken into 4 parts, the basics (SOLID), creational patterns, 
structural patterns, and behavioral patterns.

# creational
    builder
    Factories
        Abstract Factory
        Factory Method
    Prototype
    Singleton

# structural
    adapter
    bridge
    composite
    decorator
    facade
    flyweight
    proxy

# behavioral 
    chain of responsibility
    command
    interpreter
    iterator
    mediator
    momento
    observer
    state
    strategy
    template Method
    visitor

---

# SOLID
    **Single responsibility**: Each class should have a single responsibility.
    **Open Close Principal**: Rather than modify class (add new properties/methods) extend and create new classes if possible.
    **Liskov Substitution Principal**: if you have some method that takes a base class, it should equally be able to take its' children (exetended classes)
    **Interface Segrigation Principal**: Not practical due to Javascript duck typing. Do not include interfaces/methods/properties that aren't needed by the child class.
    **Dependency Inversion Principal**: High-level modules should not rely on Low-Level modules (like data that should be private), but rather abstractions. You would typically use abstract classes or interfaces, but Javascript does not contain either.

    **Principal of least surprise**: dev/user should not get unexpected or undocumented results. (things should make sense and be predictable.)
