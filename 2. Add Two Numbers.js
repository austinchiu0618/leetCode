
// ListNode
// 此題參考參考網路寫法
var addTwoNumbers = function (l1, l2) {
    var newLN = new ListNode(0);
    var returnList = newLN;
    var sum,carry = 0;
    
    while (l1 || l2 || carry > 0) {
        sum = 0; 
        if(l1 !== null){
            sum += l1.val;
            l1 = l1.next; 
        }
        if(l2 !== null){
            sum+= l2.val;
            l2 = l2.next; 
        }
        sum += carry; 
        
        newLN.next = new ListNode(sum % 10);
        
        newLN = newLN.next;
        
        carry = sum > 9 ? 1 : 0;
    }
    
    return returnList.next;
};


