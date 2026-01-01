const canvas = (onPaint) => {

    window.addEventListener('load', () => {

        const e = document.body.appendChild(
            document.createElement('canvas')
        );

        document.querySelectorAll('*').forEach(e => {
            e.style.margin = '0';
            e.style.padding = '0';
        });

        Object.assign(e.style, {
            display: 'block',
            width: '100vw',
            height: '100vh',
            backgroundColor: 'black',
            cursor: 'crosshair'
        });

        e.width = window.innerWidth;
        e.height = window.innerHeight;

        const ctx = e.getContext('2d');
        ctx.fillStyle = 'white';
        ctx.strokeStyle = 'white';
        
        ctx.beginPath();

        const dot = (x, y) => {
            ctx.rect(x, y, 1, 1);
        };

        const dim = {
            width: {
                full: window.screen.width,
                half: window.screen.width / 2
            },
            height: {
                full: window.screen.height,
                half: window.screen.height / 2
            },
            pi: {
                double: (22 / 7) * 2,
                full: 22 / 7,
                half: (22 / 7) / 2
            }
        };

        onPaint(dot, dim);

        ctx.stroke();

    });

};