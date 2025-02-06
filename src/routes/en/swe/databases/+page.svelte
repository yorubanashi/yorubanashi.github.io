<!-- Databases -->

<script>
	import Markdown from "$lib/components/pages/Markdown.svelte";
</script>

<Markdown>
    <h1>Databases</h1>

    <h2>Concepts</h2>

    <h3>CAP Theorem</h3>
    <div>
        <ul>
            <li>Consistency: every read contains the most up-to-date data, or an error</li>
            <li>Availability: every request receives a non-error response</li>
            <li>Partition Tolerance: the system continues to operate despite network failure between nodes</li>
        </ul>

        <div>In the absence of a partition (aka one node), we can have both C and A.</div>

        <div>All distributed systems are at risk of network failures and thus P must be tolerated:</div>
        <ul>
            <li>Sacrifice availability: return an error/timeout in the case of replication lag</li>
                <ul><li>Common in ACID, traditional relational databases</li></ul>
            <li>Sacrifice consistency: always process query, even if it isn't the latest data</li>
                <ul><li>BASE philosophy, common in noSQL databases</li></ul>
        </ul>
    </div>

    <h3>ACID</h3>
    <div>
        <div>Involves locking operations on the database.</div>
        <ul>
            <li>Atomicity: entire operation either completely succeeds or fails</li>
            <li>Consistency: preserves database invariants such as constraints, cascades, referential integrity</li>
            <li>Isolation: concurrent execution leaves database in same state as if transactions were ran serially</li>
                <ul><li>Done by using table/row locking and timing operations</li></ul>
            <li>Durability: if transaction is committed, data will remain even in system failure</li>
                <ul><li>i.e., data is stored in non-volatile memory (a hard drive)</li></ul>
        </ul>
    </div>
    
    <h3>BASE</h3>
    <div>
        <div>Also known directly as eventual consistency.</div>
        <ul>
            <li>Basically Available: read and writes always available</li>
            <li>Soft state: state is unknown since data updates may not have converged</li>
            <li>Eventually consistent: if the system functions long enough the data will converge</li>
        </ul>
    </div>
</Markdown>
