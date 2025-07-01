class Node {
     constructor (data){
          this.data= data;
           this.next=null;
     }
}

 class SinglyLinkedList {
    constructor (){
        this.head=null;
    }
   addNode(data){
         let temp_node=this.head;   
         if(temp_node==null){
             this.head=data;
             return;
         }
        while(temp_node.next){
              temp_node=temp_node.next;
        } 
       temp_node.next=data;
   }
   printlinkedList(){
    let temp_node=this.head;
    while(temp_node){
    console.log(temp_node.data);
    temp_node=temp_node.next;
    }
   }
 deleteK(k){
    
      
 }



 }

 let newList=new SinglyLinkedList();
 newList.addNode(new Node(1));
 newList.addNode(new Node(2));
 newList.addNode(new Node(3));
 newList.addNode(new Node(4));
 newList.addNode(new Node(5));
 newList.addNode(new Node(6));
 newList.printlinkedList();
 newList.deleteK(3);