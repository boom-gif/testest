    
    var ul=document.getElementById("myUL");
    var options= { weekday:"long" , month:"short", day:"numeric" };
    var today=new Date() ;
    var dateEl= document.getElementById("dt");
        dateEl.innerHTML= today.toLocaleDateString("en-US",options);
        
    // Create a new list item when clicking on the "+" button
    function newElement(){
      var li= document.createElement("li");
      var title= document.createElement("span");
      var location= document.createElement("span");
      var startTime= document.createElement("span");
      var endTime= document.createElement("span");
      var checkbox = document.createElement('input');
 
      var titleVal = document.getElementById("title").value;
      var locationVal= document.getElementById("location").value;
      var startTimeVal= document.getElementById("stime").value ;
      var endTimeVal= document.getElementById("etime").value;

      var titletxt = document.createTextNode(titleVal);
      var locationtxt = document.createTextNode(locationVal);
      var stimetxt= document.createTextNode(startTimeVal);
      var etimetxt= document.createTextNode(endTimeVal);

      startTime.appendChild(stimetxt);
      endTime.appendChild(etimetxt);
      title.appendChild(titletxt);
      location.appendChild(locationtxt);
        checkbox.type = "checkbox";
        checkbox.value = "myvalue";
        checkbox.id = "checkbox";

    
      li.appendChild(checkbox);
      li.appendChild(startTime);
      li.appendChild(title);
      li.appendChild(location);
      li.appendChild(endTime);

      //to make sure all the fields are filled
      if (locationVal ==='' || titleVal === ''|| startTimeVal==='' || endTimeVal==='') {
        alert("All fields should be filled");
      }  //time check
      else if(startTimeVal > endTimeVal){
          alert("End time can't be before start time!");
      } 
      else if(startTimeVal === endTimeVal){
          alert("End time and start time can't be equal!");
      } //append 
            else {
        ul.appendChild(li);
      }

      document.getElementById("title").value = "";
      document.getElementById("location").value = "";
      document.getElementById("stime").value = "";
      document.getElementById("etime").value = "";
      
      //edit task
        var edit = document.createElement("button");
        var eText = document.createTextNode("edit");
        edit.id = "edit";
        edit.appendChild(eText);
        li.appendChild(edit);
     edit.addEventListener('click',function(){  
          if (this.textContent=== "edit"){
              
          var cb= document.createElement("input");
          var input1= document.createElement("input");
          var input2= document.createElement("input");
          var input3= document.createElement("input");
          var input4= document.createElement("input");
          
          cb.type="checkbox";
          input1.type= "time";
          input2.type="text";
          input3.type="text";
          input4.type= "time";
          
          input1.value= startTime.textContent;
          input2.value= title.textContent;
          input3.value= location.textContent;
          input4.value= endTime.textContent;
          
          
          li.insertBefore(input1,startTime);
          li.insertBefore(input2,title);
          li.insertBefore(input3,location);
          li.insertBefore(input4,endTime);
          
          li.removeChild(startTime);
          li.removeChild(endTime);
          li.removeChild(title);
          li.removeChild(location);
          
          this.textContent="save";
      }
        else if (this.textContent=== "save"){ 
              var cb=li.firstElementChild;
              var input1=cb.nextSibling;
              var input2=input1.nextSibling;
              var input3=input2.nextSibling;
              var input4=input3.nextSibling;
              
              var span1=document.createElement("span");
              var span2=document.createElement("span");
              var span3=document.createElement("span");
              var span4=document.createElement("span");
              
              span1.textContent= input1.value;
              span2.textContent= input2.value;
              span3.textContent= input3.value;
              span4.textContent= input4.value;
              
              
              li.insertBefore(span1 ,input1);
              li.insertBefore(cb ,span1);
              li.insertBefore(span2 ,input2);
              li.insertBefore(span3 ,input3);
              li.insertBefore(span4 ,input4);
              
              li.removeChild(input1);
              li.removeChild(input2);
              li.removeChild(input3);
              li.removeChild(input4);
              
              
              this.textContent="edit";
              sortList();
         }  
    }); 

    //to add remove button to the end of each task
      var remove = document.createElement("button");
      var txt = document.createTextNode("remove");
      remove.id = "remove";
      remove.appendChild(txt);
      li.appendChild(remove);
      remove.addEventListener("click",function(){
       this.parentNode.remove();
        });

    }

    //sorting tasks by start time
    function sortList(){
         var switching, shouldswitch;
         var items=ul.getElementsByTagName("li");
         switching= true;
         while(switching){
             switching=false;
             for(var i=0; i< (items.length-1); i++){
                 shouldswitch=false;
                 if(items[i].firstElementChild.nextSibling.innerHTML > items[i+1].firstElementChild.nextSibling.innerHTML){
                     shouldswitch=true;
                     break;
                 }
             }
             items[i].parentNode.insertBefore(items[i+1],items[i]);
             switching=true;
         }
     } 
     
    var bt=document.getElementById('addBtn');
    bt.addEventListener('click',newElement);
    bt.addEventListener('click',sortList);

