# DOM (document)

| getElement      | querySelector(All) |  
| -----------     | -----------        |
| ById            | ("#id")            |
| ByTagName       | ("tagName")        |
| ByClassName     | (".className")     |
## Properties &Methods


 <details><summary><b>Text</b></summary>

* .textContent - all text even if invisible
* .innerText - visible text
* .innerHTML - to add html tags in text
 </details>

<details>
 <summary><b>Attribute</b></summary>

* .attrName
* .getAttribute
* .setAttribute (“attrName”, “value”)
* .removeAttribute
 </details>

<details>
 <summary><b>Style</b></summary>

* .style.[DOMStyleObject](https://www.w3schools.com/jsref/dom_obj_style.asp)
* window.getComputedStyle(“element”)
* .classList.add(“className”)
* .classList.toggle(“className”)
* .classList.remove(“className”)
 </details>

<details>
 <summary><b>Nodes</b></summary>

* .parentElement()
* .children .childElementCount
* .nextSibling .previousSibling (text) .nextElementSibling .previousElementSibling (tag)
* .createElement
    * .appendChild(element)
    * .append(“text”, element)
    * .prepend() – first child
    * .[insertAdjacentElement](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement) (position, element) – sibling
    * .after .before
* .removeChild(child) – not convenient; .remove()
</details>

## Events
