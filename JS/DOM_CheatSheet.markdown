# DOM (document)

| getElement      | querySelector(All) |  
| -----------     | -----------        |
| ById            | ("#id")            |
| ByTagName       | ("tagName")        |
| ByClassName     | (".className")     |
## Properties &Methods
**Text**
* .textContent - all text even if invisible
* .innerText - visible text
* .innerHTML - to add html tags in text

**Attribute**
* .attrName
* .getAttribute
* .setAttribute (“attrName”, “value”)
* .removeAttribute

**Style**
* .style.DOMStyleObject
* window.getComputedStyle(“element”)
* .classList.add(“className”)
* .classList.toggle(“className”)
* .classList.remove(“className”)

**Nodes**
* .parentElement()
* .children .childElementCount
* .nextSibling .previousSibling (text) .nextElementSibling .previousElementSibling (tag)
* .createElement
    * .appendChild(element)
    * .append(“text”, element)
    * .prepend() – first child
    * .insertAdjacentElement(position, element) – sibling
    * .after .before
* .removeChild(child) – not convenient; .remove() 
