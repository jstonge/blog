<h1>Publications</h1>

<br>

<script>
    import ScatterPlot from '$lib/components/timeline.svelte'

    let publications = [
        {
            title: "Diverse Misinformation: Impacts of Human Biases on Detection of Deepfakes on Networks",
            authors: ["Juniper Lovato", "Laurent Hébert-Dufresne", "Jonathan St-Onge", "Randall Harp", "Gabriela Salazar Lopez", "Sean P Rogers", "Ijaz Ul Haq", "Jeremiah Onaolapo"],
            date: "2022-10-08",
            publication: "arXiv preprint arXiv:2210.10026",
            url: "https://arxiv.org/abs/2210.10026"
        },
            
        {
            title: "Eight journals over eight decades: a computational topic-modeling approach to contemporary philosophy of science",
            authors: ["Malaterre Christophe", "Lareau Francis", "Pulizzoto Davide", "St-Onge Jonathan"],
            date: "2020-12-17",
            publication: "In Synthese",
            url: "https://link.springer.com/article/10.1007/s11229-020-02915-6"
        },
        {
            title: "Quoting is not Citing: Disentangling Affiliation and Interaction on Twitter",
            authors: ["Roth Camille", "St-Onge Jonathan", "Herms Katrin"],
            date: "2022-01-01",
            publication: "In COMPLEX NETWORKS 2021: Complex Networks & Their Applications X",
            url: "https://arxiv.org/abs/2112.00554"
        },
        {
            title: "Paradoxes in the co-evolution of contagions and institutions",
            authors: ["Jonathan St-Onge", "Giulio Burgio", "Samuel F. Rosenblatt", "Timothy M. Waring", "Laurent Hébert-Dufresne"],
            date: "2023",
            publication: "arXiv preprint arXiv:2310.03672",
            url: "https://arxiv.org/abs/2310.03672",
            publicationType: "arXiv",
            eprint: "2310.03672",
            archivePrefix: "arXiv",
            primaryClass: "physics.soc-ph"
        },
        {
            title: "Socio-semantic networks as mutualistic networks",
            authors: ["St-Onge Jonathan", "Renaud-Desjardins Louis", "Mongeau Pierre", "et al."],
            date: "2022",
            publication: "Scientific Reports 12, 1889",
            url: "https://doi.org/10.1038/s41598-022-05743-5"
        }

    ];

    publications.sort((a, b) => new Date(b.date) - new Date(a.date));
</script>
  
<div class="publications">
    {#each publications as {title, authors, date, publication, url}}
      <div class="publication">
        <div class="publication-title">{title}</div>
        <div class="authors">Authors: {authors.join(", ")}</div>
        <div class="publication-info">{date} - {publication}</div>
        <a href={url} target="_blank">View Journal Article</a>
      </div>
    {/each}
</div>


<style>
    .publication {
      margin-bottom: 2rem;
    }
    .publication-title {
      font-weight: bold;
    }
    .authors {
      margin-bottom: 0.5rem;
    }
    .publication-info {
      font-style: italic;
    }
  </style>
  

  
  
  
