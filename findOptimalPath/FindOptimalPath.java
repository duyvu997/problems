import java.util.*;

public class FindOptimalPath {

  // Edge class to describe edges in the graph
  static class Edge {
    int from, to, weight;

    public Edge(int f, int t, int w) {
      from = f;
      to = t;
      weight = w;
    }
  }

  private static int dfs(int i, int at, boolean[] visited, int[] ordering, Map<Integer, List<Edge>> graph) {

    visited[at] = true;

    List<Edge> edges = graph.get(at);

    if (edges != null)
      for (Edge edge : edges)
        if (!visited[edge.to])
          i = dfs(i, edge.to, visited, ordering, graph);

    ordering[i] = at;
    return i - 1;
  }

  public static int[] topologicalSort(Map<Integer, List<Edge>> graph, int numNodes) {

    int[] ordering = new int[numNodes];
    boolean[] visited = new boolean[numNodes];

    int i = numNodes - 1;
    for (int at = 0; at < numNodes; at++)
      if (!visited[at])
        i = dfs(i, at, visited, ordering, graph);

    return ordering;
  }

  public static int sumValue(Map<Integer, List<Edge>> graph, int[] ordering) {
    int total = 0;
    for (int i = 0; i < ordering.length; i++) {
      total = total + graph.get(ordering[i]).get(0).weight;
    }
    return total;
  }

  // Example usage of topological sort
  public static void main(String[] args) {

    // Graph setup
    final int N = 4;
    Map<Integer, List<Edge>> graph = new HashMap<>();
    for (int i = 0; i < N; i++)
      graph.put(i, new ArrayList<>());
    graph.get(0).add(new Edge(0, 1, 1));
    graph.get(1).add(new Edge(1, 2, 3));
    graph.get(2).add(new Edge(2, 3, 2));
    graph.get(3).add(new Edge(3, 1, 4));

    int[] ordering = topologicalSort(graph, N);
    int total = sumValue(graph, ordering);
    System.out.println(total);
    System.out.println(java.util.Arrays.toString(ordering));
  }
}