# Parallel Mergesort

Implement a parallel version of mergesort (both the original recursive and the
iterative in-place version from a previous exercise are fine). You may use any
parallelization framework or method.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the span of the parallel program, in terms of worst-case $\Theta$? Hint:
It may help to consider the DAG of the parallel program.

Since the mergesort recursively divides n then n/2 then n/4 and so on, its added up as 
$\Theta(n)$ + $\Theta(n/2)$ + $\Theta(n/4)$ + ... = which sums up to the worst case $\Theta(n)$

I used my Mergesort code

[DAG](https://math.stackexchange.com/questions/3836719/dag-decomposition-into-parallel-components)

"I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice."
