<template>
    <div>
        <h1>Welcome to about section</h1>
        <ul>
            <li><h3>About</h3></li>
            <li><h3>Development</h3></li>
            <li><h3>Issues</h3></li>
            <li><h3>Contact</h3></li>
        </ul>
        <br>
        <div class="container">
            <h2>About</h2>
            <p>It's a simple project were, you can add a shelter, a animal in that shelter and adopt
                that pet. Easy peasy lemon squeezy
            </p>
            <p>This project was developed by a nerd who had a free time and love cofee, and want to 
                improve his development skills. And show to his mom that college was
                worth it.
            </p>

            <h2>Development</h2>
            <p>This project was made using VueJs on front-end, and php on Back-end and some tecnologies that 
                i think cool.
                <ul>
                    <li>Front-end</li>
                        <ul>
                            <li><strong>VueJs</strong> - Full package (Router, Cli and Vuetify)</li>
                        </ul>
                    <li>Back-end</li>
                        <ul>
                            <li><strong>PHP</strong></li>
                            <li><strong>Laravel</strong> - 5.8</li>
                            <li><strong>Docker</strong></li>
                            <li><strong>Docker-compose</strong></li>
                        </ul>
                    <li>You can find the source and some more information on Github with some extra informations
                        like installation, clone and more.
                        <a href="https://github.com/MTakashiMori/animal-shelter">
                            <strong>Front-end</strong>
                        </a> ,
                        <a href="https://github.com/MTakashiMori/animal-shelter-api">
                            <strong>Back-end</strong>
                        </a>
                    </li>
                </ul>
            </p>

            <h2>Issues</h2>
            <p>So far no issues were found, but in case you can report to me through email
                or open an issue on GitHub.  =D
            </p>

            <h2>Contact</h2>
            <p>In case you need to contact me to ask some question, report some problem, 
                chat or drink some coffee.
                <ul>
                    <li><strong>Email</strong> - Mtakashi.mori@gmail.com</li>
                    <li><strong>LinkedIn</strong> - <a href="https://www.linkedin.com/in/MarceloTakashi/">Marcelo Takashi</a></li>
                    <li><strong>Whatsapp / Telegram</strong> - 55 (61) 9 9984-2573</li>
                </ul>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'About'
}
</script>