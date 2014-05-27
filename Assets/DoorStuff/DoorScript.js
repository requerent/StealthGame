#pragma strict

private var open : boolean = false;
private var trigger : boolean = false;
public var doorHeight : float;

function Start () 
{
	
}

function Update () 
{
	//transform.GetChildCount() == 0; // If Childcount is 1, don't open
							  // If it's Zero, open.

	
	if(Input.GetKeyDown(KeyCode.Space) && !open && trigger && transform.GetChildCount() == 0)
	{
		open = true;
		transform.position.y += doorHeight;
		// Open the door
		
	}
	else if(Input.GetKeyDown(KeyCode.Space) && open && trigger && transform.GetChildCount() == 0)
	{
		open = false;
		transform.position.y -= doorHeight;
		// Open the door
	}	
}

function OnTriggerEnter (other : Collider) 
{
	if(other.gameObject.CompareTag("Player"))
	{
		trigger = true;
	}
}

	
function OnTriggerExit (other : Collider)
{
	if(other.gameObject.CompareTag("Player") )
	{
		trigger = false;
	}
		
}

// Press Button to open door
	// How do we open the door?
// Press button to close door
// Check to make sure player is in trigger before opening door
// Check to make sure key has been collected before opening door



// Create another boolean to store whether the player is inside or outside of the door
//OnTriggerEnter
	//CompareTag("Player")
//OnTriggerExit
	