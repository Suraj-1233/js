class Node {
	  constructor (data){
			this.data=data;
			this.next=null;
			this.prev=null;
			
		}
}


class LinkedList {
	  constructor(){
			 this.head=null;
		}
	
	printList(){
		 let currentNode=this.head;
		while(currentNode){
			console.log(currentNode.data);
            currentNode=currentNode.next;

		}
		
	}
    lengthofList(){
        let len=0;
         let currentNode=this.head;
         while(currentNode){
            len++;
            currentNode=currentNode.next;
         }
         return len;
    }
	addNodeinFront(data){
		let newNode= new Node (data);
		if(!this.head){
			this.head=newNode; return;
		}
		this.head.prev=newNode;
        newNode.next=this.head;
		this.head=newNode;
		
	}
	addNodeinLast(data){
        let newNode=new Node(data);
        let currentNode=this.head;
        if(!this.head){
			this.head=newNode; return;
		}
        while(currentNode.next){  currentNode=currentNode.next;}
        newNode.prev=currentNode;
        currentNode.next=newNode;

		
	}
    addNodeinSpecificPosition(data,index){
    let len=this.lengthofList();
            let refindex=0;
    let currentNode=this.head;
    if(index>len|| index<0) {console.log(" invaild index ,please enter valid index ")}
	if(index===0){
         this.addNodeinFront(data); return
    }
    if(len===index){
        this.addNodeinLast(data);
        return
    }
    while(refindex<index-1){
        currentNode=currentNode.next;
        refindex++;
    }
    let newNode= new Node(data);
    newNode.next=currentNode.next;
    newNode.prev=currentNode.next.prev;
    currentNode.next=newNode;
    currentNode.next.prev=newNode;     
	}  
    deleteNodefromstart(){
        let currentNode=this.head;
        if(!currentNode) {console.log("no data avilable") ;return }
        if(!currentNode.next){ this.head=null; return}
        this.head=this.head.next;



    } 
    deleteNodefromend(){
        let currentNode=this.head;
        if(!currentNode) {console.log("no data avilable") ;return }
        if(!currentNode.next){ this.head=null; return}
        while(currentNode.next){
            currentNode=currentNode.next;
        }
        currentNode.prev.next=null;
    }
    deleteNodefromSpecificPostion(index){
        let len=this.lengthofList();
        let currentNode=this.head;
        if((index<0) ||( index>len)) { console.log(" invaild index please enter a vaild index"); return}
        if(index==0){ this.deleteNodefromstart(); return}
        if(index==len){ this.deleteNodefromend(); return}
        let refindex=0;
         while(refindex<index-1){
         currentNode=currentNode.next;
         refindex++;
         }
         currentNode.prev.next=currentNode.next;
    }
	deleteNodefromSpecificValue(data){
        let currentNode=this.head;
    }
    traverslistfromend(){

    }
	
	
}

 let list =new LinkedList();
	list.addNodeinFront(1);
	list.addNodeinFront(2);
	list.addNodeinFront(3);
	list.addNodeinFront(4);
	list.addNodeinFront(5);
	list.addNodeinFront(6);
	list.addNodeinFront(7);
    list.addNodeinLast(8)
    list.printList();
    list.addNodeinSpecificPosition(41,5);
    console.log("New ata comes here.");
    list.deleteNodefromstart();
    list.deleteNodefromend();
    list.deleteNodefromSpecificPostion(3);
    list.printList();