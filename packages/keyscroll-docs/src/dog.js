export class Dog {
    bark() {
        console.log('woof');

        document.onload = () => {
            document.getElementById('test').innerText = "Hi from dog";
        };

    }
}
