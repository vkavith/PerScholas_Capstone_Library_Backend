#  PerScholas Capstone Library Backend

##  https://github.com/vkavith/PerScholas_Capstone_Library_Frontend

## How will you model your data? (Schema) What is the data you are CRUD ing?
+ Books
+ User
+ Transaction

+ Books data model
  + bookName
  + ISBN
  + author
  + stock
  + category
   
+ User data model
  + username
  + email
  + password
  + role [admin, user]
 
+ Transaction
   + book { ref: 'Book'}
   + user:{ ref: 'User'}
   + issueDate
   + dueDate
   + returnDate
   + status [issued, returned]


  
