Pour faire marcher la version en ligne du projet:
PROJET EN LIGNE
Lien(heroku): https://front-assignments-rossia-zo.herokuapp.com/

##
Pour faire marcher en local:

1)Etape : CLONE

Clone back: https://github.com/rrossia/Back_Api_Rossia_Zo.git

Clone front: https://github.com/rrossia/Front_Assignements_Rossia_Zo.git

2)Etape: LOCAL


Ouvrir les projets l'ide

3)Etape: CONFIGURATION


  Pour le front: Il faut changer en local le Url dans:
  
    -front/src/app/shared/assignments.service.ts en url = "http://localhost:8010/api/assignments";  
    
    -front/src/app/shared/details.service.ts en url = "http://localhost:8010/api/details"
    
    -front/src/app/shared/details.service.ts en url = "http://localhost:8010/api/matiere";
		
4)Lancer le back

			-node server.js
			
5)Lancer le front

			-ng serve
				
6)Ouvrir sur le navigateur

      -localhot://4200 (avec le port votre serveur)
     
 FONCTIONNALITES:
 
 Connection/Deconnection
      -login
      -mot de passe
      
 Affichage:
    -Liste assignments non rendu et rendu
    -Pagination
   
 Details
 
 Modification (Edit)
      -Il faut être connecté pour modifier un assignment
      
 Supprimer assignments
      -Il faut être connecté pour supprimer un assignment
 
    
