#pragma strict

private var StateManager : AIStateManager;

function OnTriggerEnter(other : Collider)
{
	if(other.gameObject.CompareTag("Player"))
	{
		StateManager.playerLastLocation.transform.position = other.gameObject.transform.position;
		StateManager.currentState = EnemyStates.INVESTIGATE;
	}
}

function Start () {

	StateManager = transform.parent.gameObject.GetComponent("AIStateManager");
}

function Update () {

}