    const container = document.querySelector('.container');
        const children = container.children;

        function animateElements() {
            for (let i = 0; i < children.length; i++) {
                setTimeout(() => {
                    children[i].classList.add('animated');
                }, 100 * i); 
            }
        }

        window.onload = animateElements;