<!DOCTYPE html> <!-- Déclaration du Doctype : standard qui est utilisé -->
<html lang="fr">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=2"/> <!-- viewport de la même largeur que l'écran/Possiblité de zoomer X2 -->
    <meta http-equiv="Content-Type" content="text/html" charset="utf-8"> <!-- Encodage de ma page avec norme UTF-8, qui comprend toutes les lettres et langues du monde -->

    <title>WebAgency : l'agence de tous vos projets !</title><!-- Titre de la page web -->

    <meta name="description" content="Site de la WebAgency, l'agence de tous vos projets."/> <!-- Courte phrase décrivant le site -->
    <meta name="keywords" content="réalisation de sites Web, UX Design, Ui Design, SEO, référencement naturel"/> <!-- Mots-clefs pour le référencement -->
    <meta name="copyright" content="WebAgency"/>
    <meta name="language" content="fr">
    <meta name="robots" content="index, follow"/> <!-- pour dire aux robots des moteurs de recherche d'indexer la page et suivre les liens de la page -->

    <!-- CSS pour la mise en forme de la page HTML -->
    <link href="css/style.css" rel="stylesheet" type="text/css">
    <link href="css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <!-- police personnalisée googlefont 'Roboto' -->
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" type="text/css">

    <!-- Icons -->
    <link href="images/favicon.ico" type="image/ico" rel="icon" />
    <link rel="icon" type="image/png" href="images/ico/favicon-32x32.png" sizes="32x32">
    <link rel="icon" type="image/png" href="images/ico/favicon-16x16.png" sizes="16x16">
    <link rel="shortcut icon" href="images/ico/favicon.ico">

    <!-- Facebook Open Graph data -->
    <meta property="og:title" content="Accueil de la WebAgency"/>
    <meta property="og:type" content="website"/>
    <meta property="og:url" content="http://web-agency.des-is-it.com/"/>
    <meta property="og:image" content="http://web-agency.des-is-it.com/images/logo.png"/>
    <meta property="og:description" content="Agence Web regroupant des développeurs intégrateurs et graphistes, réalisant des sites Internet de qualité."/>
    <meta property="og:site_name" content="web-agency"/>

    <!-- Twitter Card data -->
    <meta name="twitter:card" content="summary">
    <meta name="twitter:site" content="@web_agency">
    <meta name="twitter:title" content="Accueil de la WebAgency">
    <meta name="twitter:description" content="Agence Webregroupant des développeurs intégrateurs et graphistes, réalisant des sites Internet de qualité.">
    <meta name="twitter:creator" content="@web_agency">
    <meta name="twitter:image:src" content="http://web-agency.des-is-it.com/images/logo.png">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

    <!-- jQuery library -->
    <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
</head>

<body>
<div id="container">

    <!--========== En-tête ==========-->
    <header id="top">
        <div id="navigation">
            <div id="logo">
                <a href="#"><img src="images/logo.png" alt="Logo de la Webagency"></a>
            </div>
            <!--DropdownMenu principal -->
            <nav>
                <!-- Dropdown menu -->
                <div id="dropdown">
                    <button id="dropbtn"><i class="fa fa-bars fa-3x" aria-hidden="true"></i></button>
                    <button id="dropbtn-close"><i class="fa fa-times fa-3x" aria-hidden="true"></i></button>
                    <div id="dropdown-content">
                        <a href="#top" class="scroll">Accueil</a>
                        <a href="#nos-services" class="scroll">Services</a>
                        <a href="#nos-projets" class="scroll">Portfolio</a>
                        <a href="#nous-contacter" class="scroll">Contact</a>
                    </div>
                </div>
                <ul>
                    <li><a href="#top" class="scroll">Accueil</a></li>
                    <li><a href="#nos-services" class="scroll">Services</a></li>
                    <li><a href="#nos-projets" class="scroll">Portfolio</a></li>
                    <li><a href="#nous-contacter" class="scroll">Contact</a></li>
                </ul>
            </nav>
        </div>

        <!-- Slider -->
        <section id="slider">
            <div id="slides">
                <div id="slide-1"></div>
                <div id="slide-2"></div>
            </div>
            <!-- Details slider -->
            <div id="before" title="Précédent">
                <i class="fa fa-chevron-left" aria-hidden="true"></i>
            </div>
            <div id="next" title="Suivant">
                <i class="fa fa-chevron-right" aria-hidden="true"></i>
            </div>
            <!-- Titre principal -->
            <div id="main-title">
                <h1>WEBAGENCY <span>: L'AGENCE DE TOUS <br>VOS PROJETS !</span></h1>
                <p>Vous avez un projet web ? La WebAgency vous aide à le réaliser !</p>
                <a class="centrer" href="#nos-services">Plus d'infos</a>
            </div>
            <!-- Progress bar -->
            <div id="timeline"></div>
            <div id="timeline-background"></div>
        </section>
    </header>

    <!--========== Section "Nos services" ============-->
    <section id="nos-services">
        <div id="services-description" class="centrer">
            <h2>NOS SERVICES</h2>
            <div class="h2-separation">
                <hr>
                <div class="circle"><i class="fa fa-circle circles" aria-hidden="true"></i></div>
            </div>
            <p>Nous concevons des solutions de communication numérique sur mesure : site vitrine, blog, forum ou encore boutique en ligne. Que ce soit pour un site ambitieux ou un site modeste, avec nos clients, nous travaillons avec la même exigence.</p>
        </div>

        <!-- Liste des services -->
        <div id="list-services">
            <img src="images/main-feature.png" alt="Ecran d'ordinateur Apple sur lequel on peut voir : un logo jaune, et six images représentant des visuels d'enfants portant des tee-shirts."><!--alt pour alternatif, courte description pour navigateur non visuel ou personne malvoyant avec lecteur d'écran, et référencement-->
            <ul>
                <li>
                    <div class="fa-items">
                        <div class="fa-services"></div>
                        <i class="fa fa-line-chart fa-2x" aria-hidden="true"></i><i class="fa fa-circle circles" aria-hidden="true"></i>
                    </div>
                    <div class="list-items">
                        <h3>UX Design</h3>
                        <p>Soucieux du confort et de la simplicité d'utilisation des sites que nous réalisons, nous utilisons une technique appelée <em>UX Design</em> (pour <i>User eXperience</i>). Nous nous basons sur le ressenti, le plaisir d'utilisation, la compréhension et l'expérience du site par nos clients pendant sa conception.</p>
                    </div>
                </li>
                <li>
                    <div class="fa-items">
                        <div class="fa-services"></div>
                        <i class="fa fa-cubes fa-2x" aria-hidden="true"></i><i class="fa fa-circle circles" aria-hidden="true"></i>
                    </div>
                    <div class="list-items">
                        <h3>UI Design</h3>
                        <p>Nous utilisons des normes techniques spécifiques afin de garantir la meilleure organisation des éléments qui composent chaque site Web (textes, images,...), notamment sur tous types d'écran (<em>Responsive Design</em>), et nous garantissons l'accessibilité et la compatiblité avec tous les navigateurs.</p>
                    </div>
                </li>
                <li>
                    <div class="fa-items">
                        <div class="fa-services"></div>
                        <i class="fa fa-pie-chart fa-2x" aria-hidden="true"></i><i class="fa fa-circle circles" aria-hidden="true"></i>
                    </div>
                    <div class="list-items">
                        <h3>SEO</h3>
                        <p>Nous utilisons une technique appelée <em>SEO</em> (pour <i>search engine optimisation</i>, que l'on peut traduire par <em>référencement naturel</em>), qui a pour objectif le positionnement d'un site dans les premiers résultats naturels des moteurs de recherche.</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>

    <!--========== Section "Nos projets" ==========-->
    <section id="nos-projets">
        <div id="projets-description" class="centrer">
            <h2>NOS PROJETS</h2>
            <div class="h2-separation">
                <hr>
                <div class="circle"><i class="fa fa-circle circles" aria-hidden="true"></i></div>
            </div>
            <p>Nous avons eu l'opportunité de travailler sur des projets aussi variés qu'originaux, et remercions nos clients pour la confiance qu'ils ont placé en nous. Nous vous proposons de les découvrir sans plus tarder.</p>
            <!-- DropdownMenu secondaire -->
            <div id="projets-menu">
                <ul> <!-- (Liens désactivés) -->
                    <li><a class="active">All Works</a></li>
                    <li><a>Creative</a></li>
                    <li><a>Corporate</a></li>
                    <li><a>Portfolio</a></li>
                </ul>
            </div>
        </div>
        <!-- Portfolio -->
        <div id="portfolio-content">
            <div class="portfolio-items allworks">
                <img src="images/portfolio/01.jpg" alt="Dessin sur fond orange représentant des lunettes avec sourcils et un nez.">
                <div class="hidden">
                    <span class="i-fa-eye"><i class="fa fa-eye" aria-hidden="true"></i></span>
                    <div class="items">
                        <h4>Site vitrine</h4>
                        <p>Pour Pierre Dupont, opticien.</p>
                    </div>
                </div>
            </div>
            <div class="portfolio-items allworks">
                <img src="images/portfolio/02.jpg" alt="Dessin sur fond bleu sur lequel se trouve un homme déguisé en lapin rose qui tient une lampe torche dans sa main droite.">
                <div class="hidden">
                    <span class="i-fa-eye"><i class="fa fa-eye" aria-hidden="true"></i></span>
                    <div class="items">
                        <h4>Forum</h4>
                        <p>Pour l'association <i>D.E.S is it</i>.</p>
                    </div>
                </div>
            </div>
            <div class="portfolio-items allworks">
                <img src="images/portfolio/03.jpg" alt="Dessin sur fond bordeau avec, en blanc, le logo de la marque Original Pompadour, ainsi que son slogan : Slicked back since 1980.">
                <div class="hidden">
                    <span class="i-fa-eye"><i class="fa fa-eye" aria-hidden="true"></i></span>
                    <div class="items">
                        <h4>Site avec interface admin</h4>
                        <p>Pour la marque <i>Pompadour</i>.</p>
                    </div>
                </div>
            </div>
            <div class="portfolio-items allworks">
                <img src="images/portfolio/04.jpg" alt="Dessin sur fond jaune représentant un tas de pages empliées, avec, sur celles su dessus, du texte.">
                <div class="hidden">
                    <span class="i-fa-eye"><i class="fa fa-eye" aria-hidden="true"></i></span>
                    <div class="items">
                        <h4>Blog avec espace membres</h4>
                        <p>Pour Jean Forteroche, acteur et écrivain.</p>
                    </div>
                </div>
            </div>
            <div class="portfolio-items allworks">
                <img src="images/portfolio/05.jpg" alt="Dessin sur fond gris sur lequel se trouve deux sacs de shopping.">
                <div class="hidden">
                    <span class="i-fa-eye"><i class="fa fa-eye" aria-hidden="true"></i></span>
                    <div class="items">
                        <h4>Boutique Prestashop</h4>
                        <p>Pour le magasin de luxe <i>PSO Mockup</i>.</p>
                    </div>
                </div>
            </div>
            <div class="portfolio-items allworks">
                <img src="images/portfolio/06.jpg" alt="Dessin dans les tons rouge-orangé, représentant une ville composée d'architecture de différents pays (pyramide d'Egypte, pont américain, temple d'Asie, immeuble français...). Au centre de l'image se trouve un immeuble et une maison bleus.">
                <div class="hidden">
                    <span class="i-fa-eye"><i class="fa fa-eye" aria-hidden="true"></i></span>
                    <div class="items">
                        <h4>Site Wordpress</h4>
                        <p>Pour l'office du tourisme de Strasbourg.</p>
                    </div>
                </div>
            </div>
            <div class="portfolio-items allworks">
                <img src="images/portfolio/07.jpg" alt="Dessin sur fond beige représentant un logo géométrique noir, qui ressemble à un smartphone en biais transperçé d'une flèche.">
                <div class="hidden">
                    <span class="i-fa-eye"><i class="fa fa-eye" aria-hidden="true"></i></span>
                    <div class="items">
                        <h4>Carte interactive</h4>
                        <p>Pour location de vélos.</p>
                    </div>
                </div>
            </div>
            <div class="portfolio-items allworks">
                <img src="images/portfolio/08.jpg" alt="Dessin sur fond gris-beige, représentant un enssemble d'accessoires (sac, boitier à lunettes, règle, tampon...) avec, au centre, une feuille. Le nom de la marque Be Theme est visible sur l'ensemble de ces éléments.">
                <div class="hidden">
                    <span class="i-fa-eye"><i class="fa fa-eye" aria-hidden="true"></i></span>
                    <div class="items">
                        <h4>Site Web</h4>
                        <p>Pour la marque <i>Be Theme</i>.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!--============= Section Contact =============-->
    <section id="nous-contacter">
        <div>
            <h2 class="centrer">NOUS CONTACTER</h2>
            <div class="h2-separation">
                <hr>
                <div class="circle"><i class="fa fa-circle circles" aria-hidden="true"></i></div>
            </div>
        </div>

        <!-- Formulaire-->
        <form action="#" method="post" enctype="">
            <fieldset>
                <legend><b>Contact Info</b></legend>
                <p><strong>WebAgency SAS</strong><br>
                    25 rue d'Hauteville 75010 Paris<br>
                    <span id="tel">Tel :</span> 01 02 03 04 05</p>
                <div class="form-group centrer">
                    <label for="name"></label>
                    <input type="text" id="name" name="name" class="form-input" value="Name" required maxlength="255" title="Nom">
                </div>
                <div class="form-group centrer">
                    <label for="email"></label>
                    <input type="email" id="email" name="email" class="form-input" value="Email" required maxlength="254" title="Adresse mail">
                </div>
                <div class="form-group centrer">
                    <label for="subjet"></label>
                    <input type="text" id="subjet" name="subjet" class="form-input" value="Subject" required maxlength="255" title="Objet">
                </div>
                <div class="form-group centrer">
                    <label for="message"></label>
                    <textarea id="message" name="message" rows="10" cols="20" maxlength="3000" title="Votre message">Message</textarea>
                </div>
                <div class="form-group">
                    <input type="submit" name="envoyer" id="input-contact" value="Send Message" title="Envoyer">
                </div>
            </fieldset>
        </form>

        <!-- Carte + fond bleu -->
        <div id="fondBleu">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2624.218398456897!2d2.349823!3d48.873113!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e145ccb3091%3A0x9495beee8c96ec27!2s25+Rue+d&#39;Hauteville%2C+75010+Paris!5e0!3m2!1sfr!2sfr!4v1511631472619" allowfullscreen title="Carte Goople Map"></iframe>
        </div>
    </section>

    <!-- Pied de page -->
    <footer>
        <ul>
            <li class="">
                <a href="https://twitter.com/D_Maitrejean" target="_blank" title="Twitter">
                    <span class="fa-stack fa-lg">
                        <i class="fa fa-circle fa-stack-2x"></i>
                        <i class="fa fa-twitter fa-stack-1x fa-inverse"></i>
                    </span>
                </a>
            </li>
            <li class="">
                <a href="https://www.linkedin.com/in/d%C3%A9borah-maitrejean" target="_blank" title="Linkedin">
                    <span class="fa-stack fa-lg">
                        <i class="fa fa-circle fa-stack-2x"></i>
                        <i class="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                    </span>
                </a>
            </li>
            <li class="">
                <a href="https://github.com/deborah-maitrejean" target="_blank" title="GitHub">
                    <span class="fa-stack fa-lg">
                        <i class="fa fa-circle fa-stack-2x"></i>
                        <i class="fa fa-github fa-stack-1x fa-inverse"></i>
                    </span>
                </a>
            </li>
        </ul>
        <p class="copyright">
            <span>2018 Copyright &copy; <a href="#">Web Agency</a></span>
            |
            <span><a>Mentions légales</a></span>
            |
            <span>Site crée par <a href="https://deborah-maitrejean.com" target="_blank">Déborah Maitrejean</a></span>
        </p>
    </footer>

</div><!-- Container end -->

<script src="js/navigation.js"></script>
<script src="js/DropdownMenu.js"></script>
<noscript>
    <p>Attention :<br>
        Afin de pouvoir utiliser notre site, JavaScript doit être activé.
    </p>
</noscript>

</body>
</html>
