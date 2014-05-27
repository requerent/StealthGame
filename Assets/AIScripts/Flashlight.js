#pragma strict

private var StateManager : AIStateManager;

function OnTriggerEnter(other : Collider)
{
	if(other.gameObject.CompareTag("Player"))
	{
		StateManager.currentState = EnemyStates.PURSUIT;
	}
}

function Start () {

	StateManager = transform.parent.gameObject.GetComponent("AIStateManager");
}

function Update () {

}