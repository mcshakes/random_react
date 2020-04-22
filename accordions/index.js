class Accordion {
    constructor(accordionTop) {
        this.accordionTop = accordionTop;
    }

    toggleOpen(elem) {
        elem.classList.add('is-open');
        console.log(elem)
        let elemID = elem.querySelector('.accordion-panel').id
        this.ariaHiddenFalse(elemID)
    }

    toggleClose(elem) {
        elem.classList.remove('is-open');
    }

    ariaHiddenFalse(elemId) {
        let attr = document.getElementById(elemId).attributes;

        if (attr['aria-hidden'].value === "true") {
            document.getElementById(elemId).setAttribute("aria-hidden", "false");
        }
    }

    ariaHiddenTrue(elemId) {
        let attr = document.getElementById(elemId).attributes;

        if (attr['aria-hidden'].value === "false") {
            document.getElementById(elemId).setAttribute("aria-hidden", "true");
        }
    }

    ariaExpandedFalse(elemId) {
        let attr = document.getElementById(elemId).attributes;

        if (attr['aria-expanded'].value === "true") {
            document.getElementById(elemId).setAttribute("aria-expanded", "false");
        }
    }

    ariaExpandedTrue(elemId) {
        let attr = document.getElementById(elemId).attributes;

        if (attr['aria-expanded'].value === "false") {
            document.getElementById(elemId).setAttribute("aria-expanded", "true");
        }
    }

    closeOpenPanes(targetPane) {
        // Using target pane, i get parent and only grab the children in form of array

        const parentBody = Array.from(targetPane.parentElement.children);

        parentBody.forEach(accPiece => {
            let isOpen = accPiece.classList.contains("is-open");

            isOpen ? this.toggleClose(accPiece) : null;

            let elemID = accPiece.querySelector('.accordion-panel').id

            this.ariaHiddenTrue(elemID)
            this.ariaExpandedFalse(accPiece.id)
        })
    }

    run() {
        const allAccordions = document.querySelectorAll(this.accordionTop);
        const allAccordionItems = document.querySelectorAll(".accordion-item");

        allAccordions.forEach((singleAccordion) => {
            // singleAccordion = each of the accordion within array            

            allAccordionItems.forEach((pane) => {
                pane.addEventListener("click", () => {
                    this.closeOpenPanes(pane)
                    this.toggleOpen(pane);
                    this.ariaExpandedTrue(pane.id);
                })
            })

        })
    }

}

const accordion = new Accordion(".accordion")
accordion.run();
