// Liste des films
const collection = [
    {
      name: "Priest",
      director: "Scott Charles Stewart",
      releaseYear: 2011,
      picture: "https://m.media-amazon.com/images/M/MV5BMTQ1MTAwODc3OV5BMl5BanBnXkFtZTcwNzI0MDQ3NA@@._V1_.jpg",
      genre: ["Horreur", "Action"],
      cast: [
        "Paul Bettany",
        "Karl Urban",
        "Cam Gigandet",
        "Lily Collins",
      ],
      description: " À la suite de la guerre séculaire qui opposa humains et vampires, ces derniers ont été vaincus par la caste des Prêtres et les survivants parqués dans des réserves. Dans ce monde ravagé, les villes sont devenues des mégalopoles gouvernées par les hautes instances du clergé et les Prêtres sont laissés pour compte, désormais inutiles. Lorsque la nièce d'un prêtre est kidnappée par des vampires, le Clergé ne veut pas y croire. Ce prêtre va alors braver l'autorité religieuse pour la secourir.",
    },
     
    {
        name: "Lord Of The Rings",
        director: "Peter Jackson",
        releaseYear: 2001,
        picture: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg",
        genre: ["Fantasy", "Adventure"],
        cast: [
          "Elijah Wood",
          "Ian McKellen",
          "Liv Tyler",
          "Viggo Mortensen",
        ],
        description: "Un jeune et timide `Hobbit', Frodon Sacquet, hérite d'un anneau magique. Bien loin d'être une simple babiole, il s'agit d'un instrument de pouvoir absolu qui permettrait à Sauron, le `Seigneur des ténèbres', de régner sur la `Terre du Milieu' et de réduire en esclavage ses peuples. Frodon doit parvenir jusqu'à la `Crevasse du Destin' pour détruire l'anneau."
      },

      {
        name: "Inception",
        director: "Christopher Nolan",
        releaseYear: 2010,
        picture: "https://www.tvguide.com/a/img/catalog/provider/1/2/1-172521311.jpg",
        genre: ["Action", "SF"],
        cast: [
          "Leonardo DiCaprio",
          "Joseph Gordon-Levitt",
          "Elliot Page",
          "Marion Cotillard",
        ],
        description: "Dom Cobb est un voleur expérimenté dans l'art périlleux de `l'extraction' : sa spécialité consiste à s'approprier les secrets les plus précieux d'un individu, enfouis au plus profond de son subconscient, pendant qu'il rêve et que son esprit est particulièrement vulnérable. Très recherché pour ses talents dans l'univers trouble de l'espionnage industriel, Cobb est aussi devenu un fugitif traqué dans le monde entier. Cependant, une ultime mission pourrait lui permettre de retrouver sa vie d'avant.",
      },

      {
        name: "Demineur",
        director: "Kathryn Bigelow",
        releaseYear: 2008,
        picture: "https://fr.web.img2.acsta.net/medias/nmedia/18/70/49/71/19145564.jpg",
        genre: ["Guerre", "Action"],
        cast: [
          "Jeremy Renner",
          "Anthony Mackie",
          "Brian Geraghty",
          "Evangeline Lilly",
          "Guy Pearce",
        ],
        description: "Le lieutenant James est à la tête de la meilleure unité de déminage de l'armée américaine. Leur mission est de désamorcer des bombes dans des quartiers civils ou des théâtres de guerre, au péril de leur vie, alors que la situation locale est encore explosive.",
      },

      {
        name: "Avengers",
        director: "Joss Whedon",
        releaseYear: 2012,
        picture: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY1200_CR90,0,630,1200_AL_.jpg",
        genre: ["Action", "Aventure"],
        cast: [
          "Elizabeth Olsen",
          "Scarlett Johansson",
          "Robert Downey Jr.",
          "Cobie Smulders",
        ],
        description: "Quand un ennemi inattendu fait surface pour menacer la sécurité et l'équilibre mondial, Nick Fury, directeur de l'agence internationale pour le maintien de la paix, connue sous le nom du S.H.I.E.L.D., doit former une équipe pour éviter une catastrophe mondiale imminente.",
      },

      {
        name: "Iron Man",
        director: "QJon Favreau",
        releaseYear: 2008,
        picture: "https://upload.wikimedia.org/wikipedia/en/0/02/Iron_Man_%282008_film%29_poster.jpg",
        genre: ["Action", "Aventure"],
        cast: [
          "Robert Downey Jr.",
          "Jon Favreau",
          "Gwyneth Paltrow",
          "Terrence Howard",
        ],
        description: "Alors qu'il fait l'essai d'une arme de son invention en Afghanistan, le milliardaire Tony Stark est capturé par des insurgés qui le forcent à travailler pour eux. Mais à leur insu, le scientifique crée pour lui-même une armure superpuissante au moyen de laquelle il s'évade et rentre aux États-Unis.",
      },

      {
        name: "Catch Me If You Can",
        director: "Steven Spielberg",
        releaseYear: 2002,
        picture: "https://www.tvguide.com/a/img/catalog/provider/1/2/1-6268500572.jpg",
        genre: ["Crime", "Drama"],
        cast: [
          "Leonardo DiCaprio",
          "Tom Hanks",
          "Christopher Walken",
          "Jennifer Garner",
        ],
        description: "Frank Abagnale Jr croyait vivre dans une famille stable. Lorsqu'il apprend que ses parents ont décidé de divorcer, il ne supporte pas la situation et, sous le choc, fugue. Bien vite confronté aux réalités de la vie en solitaire, il tente de s'insérer, mais découvre qu'il est plus facile d'endosser de faux chèques que de travailler. Il prend l'identité d'un pilote de ligne et mène la belle vie. Un agent du FBI opiniâtre le suit à la trace en espérant un jour le coincer.",
      },

      {
        name: " Thor Ragnarok",
        director: "Taika Waititi",
        releaseYear: 2017,
        picture: "https://fr.web.img3.acsta.net/pictures/17/08/24/17/34/098917.jpg",
        genre: ["Action", "SF"],
        cast: [
          "Cate Blanchett",
          "Chris Hemsworth",
          "Taika Waititi",
          "Tessa Thompson",
        ],
        description: "Privé de son puissant marteau, Thor est retenu prisonnier sur une lointaine planète aux confins de l'univers. Pour sauver Asgard, il va devoir lutter contre le temps afin d'empêcher l'impitoyable Hela d'accomplir le Ragnarök, ou la destruction de son monde et la fin de la civilisation asgardienne. Pour y parvenir, il va d'abord devoir mener un combat titanesque de gladiateurs contre celui qui était autrefois son allié au sein des Avengers : l'incroyable Hulk.",
      },

      {
        name: "C'est arrivé Près De Chez Vous",
        director: "André Bonzel",
        releaseYear: 1992,
        picture: "https://fr.web.img3.acsta.net/c_310_420/pictures/22/10/27/12/18/0685895.jpg",
        genre: ["Comédie noire", "Thriller"],
        cast: [
          "Benoît Poelvoorde",
          "Rémy Belvaux",
        ],
        description: "En Belgique, Ben gagne son pain de manière peu orthodoxe : il assassine posément de petites gens. Il est modeste. S'en prendre aux grandes fortunes attirerait l'attention sur lui et créerait quelque malheureux scandale. Ce sont ces sages principes qu'il développe devant une équipe de tournage attachée à ses pas. Ses parents et amis viennent aussi dire leur mot. Las ! L'argent vient à manquer. Compréhensif, Ben propose de financer la suite du reportage grâce à sa petite industrie florissante.",
      },



      {
        name: " Le Roi Lion",
        director: "Jon Favreau",
        releaseYear: 1994,
        picture: "https://static.fnac-static.com/multimedia/Images/FR/NR/98/2a/a8/11020952/1540-1/tsp20190314081133/LE-ROI-LION-Disney-monde-enchante.jpg",
        genre: ["Enfants", "Aventure"],
        cast: [
          "James Earl Jones",
          "Donald Glover",
          "Beyoncé",
          "Chiwetel Ejiofor",
        ],
        description: "Un lionceau nommé Simba est exilé de son royaume après avoir été accusé d'être responsable de la mort de son père, Mufasa. Avec l'aide d'un étrange duo composé d'un suricate et d'un phacochère, il décide de reprendre ce qui lui revient de droit lorsqu'il apprend qu'il est destiné à être roi.",
      },


     
   
  ];
  

  let head_p=document.createElement('header');
  main=document.getElementsByTagName('main')[0];
  container=document.getElementsByClassName('container')[0];
  main.insertBefore(head_p,container);

  //Title
  let head=document.createElement('h1');
  head.textContent="Ma collection de films";
  head_p.appendChild(head);

  let intro=document.createElement('p');
  intro.textContent="Si vous ne savez pas quoi faire ce mois de fête, je vous propose ici dix films à regarder à volonté, ils sont selon moi parmi les meilleurs! Bon visionnage!";
  head_p.appendChild(intro)
  
  


  for(let elem of collection){
    
    let carte = document.createElement("div");
    document.getElementsByClassName("container")[0].appendChild(carte);
    carte.className= "carte";
    
    let image = document.createElement("img");
    image.src = elem['picture'];
  carte.appendChild(image);
  
  let div = document.createElement("section");
  carte.appendChild(div)

  
  let titre = document.createElement("h1");
  titre.textContent = elem['name'];
  div.appendChild(titre);
  
  let real = document.createElement("q");
  real.textContent = elem['director'];
  div.appendChild(real);
  
  let year = document.createElement('p');
  year.textContent = elem['releaseYear'];
  div.appendChild(year);
  year.className= "Sortie";
 
  
  let type = document.createElement('p'); 
  type.textContent = elem['genre'];
  div.appendChild(type);
  type.className= "sorte";
 

  let casting = document.createElement('p');
  casting.textContent = elem['cast'];
  div.appendChild(casting);
  casting.className="Acteurs";
  

  let descript = document.createElement('p');
  descript.textContent = elem["description"];
  div.appendChild(descript);
  descript.className="desc";

  }
  
