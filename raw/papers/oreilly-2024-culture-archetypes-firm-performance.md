                                                                 Journal of Business Research 182 (2024) 114780


                                                                    Contents lists available at ScienceDirect


                                                              Journal of Business Research
                                                            journal homepage: www.elsevier.com/locate/jbusres




Organizational culture archetypes and firm performance
Charles O’Reilly a, * , Xubo Cao a , Donald Sull b
a
    Graduate School of Business, Stanford University, USA
b
    Sloan School of Management, MIT, USA




A R T I C L E I N F O                                       A B S T R A C T

Keywords:                                                   Much of the research on organizational culture has been driven by the assumption that culture is associated with
Organizational culture                                      organizational performance. Surprisingly, the evidence for this linkage is ambiguous for two understandable
Norms                                                       reasons. First, there has been a proliferation of definitions and measures of the construct itself which has made
Organizational performance
                                                            aggregation of findings across studies confusing. Second, demonstrating that culture affects objective firm per­
Natural language processing
Archetypes
                                                            formance requires large cross-organizational samples—but the modal approach to measuring culture using
                                                            surveys or qualitative research has made this difficult. Using a natural language processing measure of culture
                                                            with a sample of 309 large U.S. companies, we show how (1) the norms and values that define culture may be
                                                            understood as representing three underlying cultural archetypes (performance-orientation, people, and cus­
                                                            tomers) and (2) that these archetypes are related to objective firm performance in understandable ways. We
                                                            discuss the implications of these findings for future research on organizational culture.




    The topic of organizational culture has been of interest to both                         sample studies. Alvesson (2012) also notes that earlier studies have
practitioners and scholars, resulting according to one estimate in more                      relied largely on perceptual measures of performance and “Empirical
than 4,600 articles (Hartnell, Ou, & Kinicki, 2011). One of the main                         study in the area is very difficult to carry out (p. 62).”.
reasons for this interest is the presumed relationship between an orga­                          There are two main reasons for this ambiguity. First is the challenge
nization’s culture and its performance (Hartnell, Kinicki, Lambert,                          of collecting samples large enough to make interorganizational com­
Fugate, & Comer, 2016; O’Reilly, Caldwell, Chatman, & Doerr, 2014;                           parisons while controlling for potential moderator variables that might
Sackmann, 2011). For example, O’Reilly and Chatman (1996) argue that                         affect both organizational culture and firm performance such as industry
theoretically organizational culture, acting as a social control system,                     and firm size (e.g., O’Reilly, Cao, & Sull, 2023). This challenge has been
can enhance organizational performance through increased coordina­                           more of an issue since the modal quantitative approach to assessing
tion across units and heightened motivation among employees. How­                            organizational culture has relied on survey instruments which require
ever, in spite of the strong expectation that organizational culture should                  large samples of respondents to rate the culture of a single firm followed
be linked to organizational performance, the empirical evidence is sur­                      by the collection of data across firms. This has resulted in studies
prisingly ambiguous (Campos-Blasquez, Rubio-Andrada, & Celemin-                              investigating the links between organizational culture and firm perfor­
Pedroche, 2023; Kiss, Cortes, & Hermann, 2022; Tan, 2019). In a                              mance using comparatively small, low powered samples (e.g., Berson,
recent review, Chatman and O’Reilly (2016) note that while the evi­                          Oreg, & Dvir, 2008; Chatman, Caldwell, O’Reilly, & Doerr, 2014;
dence linking organizational culture to subjective indicators of perfor­                     Giberson et al., 2009) or larger sample studies with measures of orga­
mance (e.g., Denison & Mishra, 1995; Zheng, Wang, & McLean, 2010)                            nizational culture that may lack validity (e.g., Moniz, 2017; Sorensen,
and individual outcomes such as satisfaction, commitment and turnover                        2002).
is clear (e.g., Gregory, Harris, Armenakis, & Shook, 2009; Hartnell et al.,                      A second important reason for the ambiguity in findings is that the
2011), we “have less confidence in how culture might affect more                             definition of the construct of organizational culture itself remains
objective performance measures (p. 218).” Ed Schein (2010), perhaps                          theoretically amorphous, with the term being used to describe every­
the seminal scholar of organizational culture, underscores this noting                       thing from “a sociocultural system of strategies and practices” (Mar­
that determining whether particular dimensions of firm culture are                           coulides & Heck, 1993) to “shared perceptions of work practices” (Van
systematically related to some element of performance requires large                         der Berg & Wilderom, 2004) to “sets of symbols and myths” (Chatman &


    * Corresponding author.
      E-mail addresses: coreilly@stanford.edu (C. O’Reilly), xcao@stanford.edu (X. Cao), dsull@mit.edu (D. Sull).

https://doi.org/10.1016/j.jbusres.2024.114780
Received 16 March 2023; Received in revised form 8 June 2024; Accepted 11 June 2024
Available online 20 June 2024
0148-2963/© 2024 Elsevier Inc. All rights are reserved, including those for text and data mining, AI training, and similar technologies.
C. O’Reilly et al.                                                                                                     Journal of Business Research 182 (2024) 114780


Srivastava, 2021; Ouchi, 1981). The label “culture” is applied to phe­            Furnham, 1996). Research in this tradition typically defines organiza­
nomena as diverse as norms, values, repertoires, schema, codes, cate­             tional culture as “the basic assumptions and beliefs that are shared by
gories, narratives, frames, tool-kits, language, knowledge structures,            organizational members” (Schein, 2010, p. 9), or “a system of shared
shared meanings, mental programming, and unconscious assumptions                  values defining what is important, and norms, defining appropriate at­
(Giorgi, Lockwood, & Glynn, 2015; Gorton, Grennan, & Zentefis, 2021;              titudes and behaviors…” (O’Reilly & Chatman, 1996, p. 166), and
Patterson, 2014). Smircich (1983), for example, argues that organiza­             measures organizational culture as a set of norms and values that may be
tions don’t “have” culture; they “are” culture. One result of this prolif­        widely shared and strongly held within an organization (O’Reilly,
eration of constructs is that different studies of “culture” often produce        1989). The third level of culture focuses on artifacts such as symbols,
very different results—sometimes reporting positive associations and              stories, and language, and has recently been addressed using quantita­
other times finding no results (e.g., Guiso, Sapienza, & Zingales, 2015;          tive assessments of written documents such as earnings statements and
Wilderom, van den Berg, & Wiersma, 2012). Without a clear definition              corporate emails (e.g., Goldberg, Srivastava, Manian, Monroe, & Potts,
and measurement of the central construct, we are left with a “defini­             2016; Moniz, 2017). From this perspective culture is seen as “the
tional fog” that makes it difficult to construct valid theory and aggregate       intangible glue that holds a group together” (Srivastava & Goldberg,
empirical results across studies (Alvesson & Blom, 2022).                         2017, p. 58) or the term culture remains undefined (Martin et al., 1983;
    Directly related, the measures of organizational culture used by re­          Pandey & Pandey, 2019). Table 1 provides an overview of how Schein’s
searchers often lack construct validity. For example, Jung et al. (2009)          three layers have been addressed by researchers.
found no fewer than 70 culture diagnosis instruments, and these reflect               The results shown in the table underscore the wide variety of defi­
very different underlying theoretical frameworks—ranging from life                nitions and methods used by researchers to explore organizational cul­
styles to socio-analytic theory to organizational effectiveness. Even the         ture. These suggest several implications for future research. First, the
most widely used measures of organizational culture, the Denison                  ethno-methodological or qualitative approaches used to investigate
Organizational Culture Survey (Denison, 1990), the Organizational                 underlying beliefs can provide important insights into implicit beliefs or
Culture Inventory (Cooke & Rousseau, 1988) or the Competing Values                unconscious assumptions held by a groups’ members. But in this tradi­
Framework (Cameron, Quinn, DeGraff, & Thakor, 2006) were devel­                   tion (emic), each organizational culture is seen as idiosyncratic and
oped as measures of organizational effectiveness rather than organiza­            cannot be compared with others. Each organizational culture is
tional culture and incorporate assessments of strategy, structure, and            considered unique (Smircich, 1983). In contrast, a more functionalist
rewards rather than the norms and values that most researchers consider           view of culture focuses on Schein’s second layer—norms and values.
the essence of corporate culture. Thus, although there is a plethora of           From this perspective, culture is something an organization has, not
studies of organizational culture and organizational performance it is            something an organization is, and cultures can be compared across or­
difficult to aggregate these findings into a coherent picture. This lack of       ganizations (etic). The use of quantitative assessments (e.g., ratings and
conceptual clarity, or mismatch between operationalizations and con­              surveys) permits researchers to explore similarities and differences in
structs, threatens the validity of our inferences (Alvesson & Blom, 2022;         organizational culture across organizations (e.g., Kotter & Heskett,
Vizire, Schiavone, & Bottesini, 2022).                                            1992). Finally, Schein’s third layer of culture focuses on cultural arti­
    This study attempts to address this challenge. First, drawing on              facts like stories, symbols and language. Initially, research in this
recent advances in big data and machine learning, we collected data on            tradition was largely qualitative and descriptive (e.g., Martin et al.,
organizational culture from 309 organizations over the 2015–2019 time             1983; Wines & Hamilton, 2009), but more recently researchers have
frame. Drawing on Chatman and O’Reilly (2016) who suggested the                   used natural language processing techniques to quantitatively examine
need to identify a common set of cultural variables similar to how                how employee or leader opinions (e.g., employee ratings, CEO speeches)
studies of personality coalesced on the Big 5 (Bainbridge, Ludeke, &              can be used to gain insight into an organization’s culture (e.g., Corritore,
Smillie, 2022), we show how a large set of organizational culture vari­           Goldberg, & Srivastava, 2020; Moniz, 2017).
ables can be reduced to a smaller, more parsimonious set of organiza­                 Although the evidence linking organizational culture to firm per­
tional cultural archetypes. Second, using these organizational cultural           formance remains ambiguous, the recent accumulation of quantitative
archetypes we match culture data and objective measures of firm per­              cross-organization studies examining organizational culture at the
formance for 309 firms and explore how organizational culture is
associated with objective indictors of firm performance after controlling         Table 1
for firm size, industry, and CEO tenure. These archetypes offer a parsi­          Research using Schein’s 3-layer typology of culture.
monious integrated framework for understanding the association of                  Schein’s Typology (2010)    Modal Research     Illustrative Studies
organizational culture and firm outcomes.                                                                      Method

                                                                                   Underlying beliefs and      Qualitative        Participant ObserverNetflix
1. Organizational culture and cultural archetypes                                   assumptions (conscious     Participant        (Hastings & Meyer, 2020)
                                                                                    and unconscious)           Observer           Southwest Airlines
    In spite of the profusion of conceptualizations of organizational                                          Ethnography        (Gittell, 2003)Bridgewater (
                                                                                                                                  Dalio, 2018)
culture, there is widespread acceptance of Schein (2010) theoretical
                                                                                                                                  Ethnographies
categorization of organizational culture as having three layers: (1) un­                                                          Rohlen (1979)Barley (1986)Van
derlying assumptions and beliefs (that may be conscious or uncon­                                                                 Maanen (1975)
scious), (2) norms and values about appropriate attitudes and behaviors            Norms and values            Quantitative       SurveysKotter & Heskett (1982)
(that may be espoused or real), and (3) artifacts like physical space,              (espoused and real)        Surveys            Barsade and O’Neill (2014)
                                                                                                               Archival           Chatman et al. (2014)
dress, language and symbols that may reflect these. More qualitative                                                              Archival
approaches to research have focused on the first layer (e.g., Alvesson &                                                          Guiso et al. (2015)Kotrba et al.
Berg, 1992; Martin, Feldman, Hatch, & Sitkin, 1983), using either                                                                 (2012)Gorton et al. (2021)
ethnographic or participant-observer methods. In this tradition culture            Artifacts                   Qualitative        Qualitative
                                                                                     Stories                   Descriptive        Martin et al. (1983)Wines and
is often defined broadly as “the collective programming of the mind
                                                                                     Symbols                   Quantitative       Hamilton (2009)
which distinguishes the members of one organization from another”                    Language                  Surveys            Quantitative
(Hofstede, 2001, p. 262) or “a system of shared meaning” (Smircich,                  Dress                     Natural            Berger and Packard (2022)
1983, p. 348). The second level of organizational culture, norms and                                           language           Corritore et al. (2020)O’Neill
values, has typically been addressed using quantitative assessments (e.                                        processing         and Rothbard (2017)

g., O’Reilly, Chatman, & Caldwell, 1991; Rousseau, 1990; Xenikou &

                                                                              2
C. O’Reilly et al.                                                                                                   Journal of Business Research 182 (2024) 114780


second and third levels of Schein’s categories provides an opportunity to          difficult to untangle how much these results stem from organizational
explore whether there are any commonalities across studies For                     culture or other factors.
example, Pandey and Pandey (2019) examine the similarities in culture                  What is lacking is an integrative framework that can be used to
dimensions across three of the most commonly used culture assessment               capture the similarities among the different constructs. Thus, it is not
instruments and propose six underlying themes captured by these sur­               surprising that the empirical evidence linking organizational culture to
veys (competitiveness, control, customers, human resources, innova­                firm performance is often confusing or ambiguous. Any association with
tion, and team-oriented). In a similar exercise, Sull and his colleagues           firm performance may reflect not only the norms and values that
(Sull, Sull, & Chamberlain, 2019) identify nine potential underlying               constitute organizational culture but also the alignment of strategy,
factors. This suggests examining whether there exists a pattern of a set of        structure and management practices (e.g., Gibbons, Siegel, & Weber,
norms within an organization (or archetypes) that reflect how much                 2021; Hongyi & Van den Steen, 2021). That is, any significant (or lack of
emphasis is placed on performance (e.g., attention to detail, innovation,          significant association) could reflect the conflated measures rather than
results-orientation), people (collaboration, respect, integrity), and              a true measure of organizational culture with firm performance. We
customers.                                                                         believe that using organizational cultural archetypes can provide a
    An archetype is a way of summarizing and categorizing a large                  simpler, more accurate way of characterizing organizational culture that
number of constructs into a smaller number that captures the salient               can be compared across organizations and is more likely to reveal
similarities among the constructs (e.g., Bocken, Short, & Evans, 2014;             veridical associations.
Greenwood & Hinings, 1993). Archetypes help simplify an otherwise                      To resolve this ambiguity, we focus explicitly on Schein (2010)
overwhelming number of constructs into an understandable smaller set               second level of organizational culture and conceptualize culture as those
that captures the larger pattern. They allow what might otherwise be a             norms and values that operate within an organization and help solve the
confusing set of findings to be summarized in a coherent way. For                  two fundamental problems of organizing: external adaption and internal
instance, the development of the Big 5 or Five Factor Model was a                  integration. For example, norms that promote agility, customer-
watershed moment in personality research that provided an integrative              orientation, and innovation can help an organization adapt to environ­
framework that permitted the proliferation of personality variables to be          mental changes while norms for collaboration and integrity can facili­
represented by five major personality constructs (Bainbridge et al.,               tate intra-organizational coordination and provide for a common
2022; John, Naumann, & Soto, 2008). A similar movement is currently                organizational identity. As reported in the following section, we explore
underway developing a taxonomy for psychopathology (Kotov, Krueger,                whether our measure of cultural norms (Sull et al., 2019) can be rep­
& Watson, 2021). Given the proliferation of constructs, research on                resented by a more parsimonious reduced set—or cultural archetypes.
organizational culture faces a similar problem and is in need of a more
integrative framework that can capture the similarities across different           2. Organizational culture and firm performance
measures.
    As reviewed above, different researchers have characterized orga­                  The association between organizational norms and organizational
nizational culture in a variety of ways, resulting in construct prolifera­         performance may reflect two distinct mechanisms. First, widely shared
tion and making it difficult to aggregate results across studies. For              norms may make focused and coordinated actions easier and more
example, the Competing Values Framework (CVF) considers organiza­                  likely. The performance of most organizations is based on a collective
tional culture along two researcher-defined orthogonal dimensions, (1)             output determined by coordinated action among their members. Just as
flexibility versus control, and (2) an internal versus external focus. Based       formal control systems can coordinate actions and reduce inefficiency,
on this, the CVF classifies cultures as clan, adhocracy, market and hi­            social control systems operating through widely shared and strongly
erarchy (Cameron et al., 2006; Scaliza et al., 2022). The Denison                  held norms can also coordinate actions among employees (O’Reilly,
Organizational Culture Survey (DOCS) assesses four culture dimensions,             1989). For example, when employees share norms about teamwork,
(1) mission, (2) employee involvement, (3) internal consistency, and (4)           integrity, or innovation, their behaviors can be coordinated, reducing
adaptability (Asif, 2011; Denison, 1990). The Organizational Culture               friction, and improving employee motivation, and the likelihood of co­
Inventory (OCI), developed by Cooke and Rousseau (1988), assesses 12               ordinated actions (Den Hartog & Verburg, 2004). This can improve the
dimensions or cultural norms and uses these to classify organizational             speed and efficiency of collective action and enhance the collective
culture into three types, (1) constructive, (2) passive/defensive, and (3)         output of the organization.
aggressive/defensive. Thus, as Chatman and O’Reilly (2016) observe,                    Separate from their effects on social coordination, organizational
while there has been a significant amount of data collected using these            culture, operating through shared norms, can be aligned or misaligned
instruments—and all purport to measure “organizational culture”–it is              with a firm’s strategy and context (e.g., Bezrukova, Thatcher, Jehn, &
difficult to know exactly what the construct validity is of these measures         Spell, 2012; Hongyi & Van den Steen, 2021). That is, the content of the
is or how comparable the results are. For example, Kotrba and her col­             normative order may be appropriate for a particular context but coun­
leagues (Kotrba et al., 2012) used the Denison Organizational Culture              terproductive for a different one. For example, in a highly competitive
Survey (DOCS) and found the interactions of the culture dimensions of              industry in which low-costs and efficiency are critical, an organizational
consistency, mission, involvement and adaptability to be associated                culture that emphasizes these attributes may succeed while one that
with firm sales growth, return on assets, and market-to-book values.               prizes innovation and experimentation may not work. Thus, organiza­
Their interpretation was that consistent corporate cultures are associ­            tional culture, operating through norms, may affect organizational
ated with firm performance. But it is difficult to map the definition of           performance both through the substantive content of the norms and
their cultural categories to Schein’s tripartite definition of organiza­           their alignment with the firm’s strategy and context.
tional culture. For instance, the DOCS dimension of Mission includes
ratings of the firm’s strategic direction and vision—important elements            3. Methods
for firm performance but not organizational culture. The category of
Adaptability includes employee ratings of organizational learning and              3.1. Overview of the research
customer focus. The dimension of Consistency asks for ratings of how
different functions of the organization are integrated, a measure of                   To identify organizational culture archetypes, we used the organi­
structure and coordination. Similar criticisms have been made about the            zational culture data collected by Sull et al. (2019) which includes data
Competing Values Framework (Hartnell et al., 2011). In their review,               on 524 organizations between 2014 and 2019. Nearly all these firms
Chatman and O’Reilly (2016) conclude that this research shows pre­                 were for profit and headquartered in the U.S. They represent 33 in­
dictive validity but given the problems with construct validity it is              dustries with an average of 18 companies per industry. The average

                                                                               3
C. O’Reilly et al.                                                                                                        Journal of Business Research 182 (2024) 114780


company had more than 200 reviews by employees. To explore the as­                     these results. Three easily interpretable factors emerged. The first was
sociations between organizational culture and firm performance, we                     defined by agility, collaboration, execution, innovation, and perfor­
used a subsample of this data on 460 CEOs over this same period for                    mance and clearly represents an organizational culture characterized by
which we were able to collect firm performance data. To avoid any                      norms/values that emphasize a performance-orientation. The second
confounding resulting from CEO succession events, we focused on a                      factor was defined by the norms/values of collaboration, diversity,
subsample that included 309 firms with a single CEO for this period. For               integrity and respect and indicates a cultural emphasis on people. The
each of the 309 CEOs we collected organizational culture data using the                third factor was defined by the culture dimension of customers and
Glassdoor method for culture assessment developed by Sull et al. (2019).               represents an emphasis on customer-orientation. These three factors can
As described below, we also collected data on firm size, industry, CEO                 be thought of as representing cultural archetypes and provide an effi­
tenure, and firm performance from Execucomp and Compustat.                             cient way to summarize the nine culture dimensions. We used the factor
                                                                                       scores to compute each of these three variables.
3.2. Organizational culture
                                                                                       3.4. Organizational performance
    Two organizational culture instruments that focus on norms and
                                                                                           Organizational performance can be assessed in a variety of ways.
values are the Organizational Culture Profile (OCP − O’Reilly et al.,
                                                                                       Miller, Washburn, and Glick (2013) point out the dangers of thinking
1991) that classifies culture according to six primary norms/values
                                                                                       about organizational performance as a single latent construct or
(adaptability, integrity, collaboration, results-orientation, detail-orien­
                                                                                       selecting a single outcome measure and argue for the need to use more
tation, and customer-orientation) and the Sull et al. (2019) measure that
                                                                                       granular and specific aspects of performance when testing theory.
expands this to nine values, adding agility, diversity and respect to the
                                                                                       Therefore, based on Combs, Crook, and Shook (2005) and Hamann,
six OCP dimensions. Recently, natural language processing approaches
                                                                                       Schiermann, Bellora, and Guenther (2013), we use five dimensions of
have been shown to be useful ways to assess organizational culture
                                                                                       objective firm financial performance: (1) accounting returns as
(Berger & Packard, 2022; Li, Mai, Shen, & Yan, 2021; Pandey & Pandey,
                                                                                       measured by Return on Equity (ROE), (2) stock market performance as
2019). Using natural language processing (NLP) techniques to analyze
                                                                                       indicated by Tobin’s Q (the ratio of market-to-book value), (3) firm
1.2 million reviews from more than 600 organizations, Sull and his
                                                                                       growth as measured by the percentage of year-over-year revenue
colleagues (Sull et al., 2019) identified nine dimensions of organiza­
                                                                                       growth, (4) stock analysts’ buy recommendations during a CEO’s time in
tional culture, including agility, collaboration, customer, diversity,
                                                                                       office, and (5) earnings before interest, taxes, depreciation, and amor­
execution, innovation, integrity, performance, and respect.1 These di­
                                                                                       tization (EBITDA), a rough measure of a firm’s cash flow and profit­
mensions are consistent with the factor structure of the Organizational
                                                                                       ability. All measures were collected from Compustat.
Culture Profile (Chatman et al., 2014; O’Reilly et al., 1991). Each
Glassdoor review was coded according to whether it mentioned a spe­
cific cultural value (incidence) and whether the value was described in                3.5. Control variables
positive terms (sentiment). The distinction between incidence and
sentiment maps to the two dimensions of organization culture suggested                     Previous research has shown that organizational culture varies sub­
by O’Reilly (1989): the intensity with which the norm/value is held                    stantially across industries (Chatman & Jehn, 1994; Christensen &
(sentiment), and the consensus or level of agreement (incidence). In our               Gordon, 1999; O’Reilly et al., 2023); that is, different industries have
analyses, we computed a composite measure that is equal to the per­                    characteristic organizational cultures. Firm performance also varies
centage of reviews that positively mention a cultural value in a given                 systematically across industries. Research has also shown that culture
year.                                                                                  can be affected by an organization’s size and how long a CEO has been in
                                                                                       office (O’Reilly et al., 2014). Therefore, we controlled for firm size, in­
                                                                                       dustry, and CEO tenure in our regression models. Firm size was
3.3. Organizational cultural archetypes                                                controlled using the log of the total assets in each fiscal year (Compu­
                                                                                       stat). CEO tenure was calculated by subtracting the year the CEO was
   To explore the possibility that the range of cultural variables might               appointed from the year of the data collection (Execucomp). Industry
be represented by a smaller set of cultural archetypes, we used the nine               was controlled using industry dummies based on the “sector” variable in
cultural dimensions assessed by Sull et al. (2019) for 309 firms and                   Compustat. These included: (1) Finance and insurance, (2)
conducted a factor analysis with a varimax rotation. Table 2 presents                  Manufacturing and construction, (3) Healthcare, pharma and biotech,
                                                                                       (4) Transportation and logistics, (5) Aerospace and defense, (6) Utilities
Table 2                                                                                and natural resources, (7) Retail and consumer services, (8) Technology,
Varimax Factor Analysis of Culture Dimensions (n = 309).                               and (9) Business services.
  Culture Dimension                Factor 1          Factor 2        Factor 3
                                   Performance       People          Customer          4. Results
                            Orientation
  1           Agility                 0.867          0.165           − 0.060              Using the subsample of 309 CEOs with firm performance data,
  2           Collaboration           0.539          0.588             0.123           Table 3 presents the means, standard deviations, and correlations among
  3           Customer              − 0.223          0.061             0.893
                                                                                       the variables. Several patterns are noteworthy and consistent with the
  4           Diversity             − 0.114          0.653           − 0.521
  5           Execution               0.871          0.215             0.028           importance of control variables. First, larger firms have organizational
  6           Innovation              0.699          0.045           − 0.164           cultures with a greater emphasis on people and less emphasis on cus­
  7           Integrity               0.174          0.816             0.074           tomers. In terms of performance, they also have a lower Tobin’s Q but
  8           Performance             0.631          0.149           − 0.103           more analysts’ buy recommendations and higher EBITDA. Firms with
  9           Respect                 0.228          0.713           − 0.028
                                                                                       longer serving CEOs have organization cultures with more emphasis on
                                                                                       performance and customers, higher revenue growth, and more analysts’
                                                                                       buy recommendations. Performance-oriented cultures are associated
                                                                                       with a higher Tobin’s Q, more analysts’ buy recommendations, and
                                                                                       higher revenue growth.
 1
   This video details how potential issues of bias in the Glassdoor ratings were          Table 4 presents the OLS regressions of firm performance on the
addressed: https://www.youtube.com/watch?v=inTUJqxAzYw.                                three organizational culture archetypes after controlling for industry,

                                                                                   4
C. O’Reilly et al.                                                                                                           Journal of Business Research 182 (2024) 114780


Table 3
Means, Standard Deviations, and Correlations (n = 309).
                                                1               2        3                4          5            6           7              8         9             10

  1         Firm Size (log asset)               −
  2         CEO Tenure in the job               0.13*           −
  3         Culture − Performance-orientation   − 0.04          0.08     −
  4         Culture − People                    0.14*           0.10     − 0.01           −
  5         Culture − Customer                  − 0.34**        0.08     0.04             − 0.00     −
  6         Performance − Tobin’s q             − 0.41**        0.10     17**             − 0.01     0.15*        −
  7         Performance − Return on Equity      0.02            0.03     0.00             0.05       − 0.01       0.05        −
  8         Performance − Analysts Buy          0.17**          0.08     0.09             − 0.10     − 0.16**     − 0.01      0.06           −
  9         Performance − Ebitda                0.64**          0.05     − 0.05           0.01       − 0.23**     − 0.13*     0.07           0.08      −
  10        Performance − % revenue Growth      − 0.01          0.21**   0.30**           0.05       0.08         0.16**      − 0.01         0.30**    − 0.01        −
            Mean                                4.27            6.35     0.09             0.03       0.06         2.33        000            50.3      5829          22.4
            Standard Deviation                  0.77            2.90     1.04             0.99       1.02         1.48        0.82           20.3      11,144        44.1

**p < 0.01 *p < 0.05.



Table 4
Regression of Cultural Archetypes on Firm Performance.
                                                    Tobin’s Q                Return on               Percent                      Analysts’ Buy                  EBITDA

                     Independent                                             Equity                  Revenue Growth               Recommendations
                     Variables                      1                        2                       3                            4                              5
                                                    β                        β                       β                            β                              β
                     Control Variables
                     Industry Dummies               Yes                      Yes                     Yes                          Yes                            Yes
  1                  Size (log assets)              − 0.42***                0.02                    − 0.14**                     0.21***                        0.77***
  2                  CEO Tenure                     0.16***                  0.03                    0.19***                      0.08                           0.00
                     Culture
  3                  Performance-orientation        0.17***                  0.13*                   0.29***                      0.14*                          − 0.02
  4                  People                         0.04                     0.06                    0.07                         − 0.08                         − 0.02
  5                  Customer                       − 0.02                   − 0.05                  0.02                         − 0.16**                       − 0.06
                     F-Ratio                        6.79***                  0.49                    4.44***                      2.88***                        18.8***
                     df                             301                      301                     308                          305                            306
                     Adjusted R2                    0.20                     0.00                    0.13                         0.08                           0.43

*p < 0.05 **p < 0.01 Standardized Regression Coefficients.


firm size, and CEO tenure. Consistent with the correlational results,                     5. Discussion
larger firms have a higher EBITDA and more analysts’ buy recommen­
dations but a lower market-to-book ratio (Tobin’s Q) and revenue                              The results here have both theoretical and practical implications.
growth. Firms with CEOs with longer tenure have higher revenue                            While previous studies of the organizational culture-performance rela­
growth and a higher market-to-book ratio. Although not reported in                        tionship have provided mixed and sometimes confusing results, the
Table 3, there are also sensible industry effects on firm performance. For                findings here offer a clearer picture. Focusing on cultural archetypes, we
example, the technology industry has a higher Tobin’s Q, more analysts’                   provide evidence that organizational culture is related to objective firm
buy recommendations, and higher revenue growth while industries like                      performance in some interesting and surprising ways.
manufacturing and transportation report lower EBITDA.                                         Overall, this study contributes to the study of organizational culture
    After controlling for these effects, the results show an interesting                  in three useful ways. First, it provides robust evidence for the linkages
pattern for the impact of organizational culture on firm performance.                     between organizational culture and objective firm performance. While
Fig. 1 illustrates these relationships. First, organizations with a greater               prior theorizing has suggested these associations, previous research has
emphasis on a culture of performance-orientation have both higher                         provided mixed results (e.g., Hartnell et al., 2016). The results here
revenue growth and a higher market-to-book value, suggesting that an                      confirm that organizational cultures comprised of norms that emphasize
organizational culture that emphasizes performance-oriented norms                         a performance-orientation have positive effects on objective firm per­
may be associated with both accounting and market-based measures of                       formance independent of industry and firm size. Second, and consistent
firm performance. There were no significant associations between a                        with the calls for more research of this type (Chatman & O’Reilly, 2016),
people-oriented culture and any measure of firm performance. While                        this study uses an innovative combination of natural language process­
previous studies have linked people-oriented cultures to subjective                       ing and big data to collect and analyze these relationships using a large
perceptions of performance and to employee satisfaction and engage­                       sample of organizations. This approach allows for the investigation of
ment (e.g., Hartnell et al., 2011), we find no evidence that they are                     inter-organizational comparisons, including adequate controls for ef­
associated with objective firm performance. Interestingly, firms with a                   fects like firm size and industry, in ways not previously possible. Finally,
more customer-oriented culture have fewer analysts’ buy recommen­                         we provide some preliminary evidence that the norms that characterize
dations, suggesting that analysts may perceive these firms as less focused                a firm’s culture can be summarized as representing three major under­
on driving short-term financial performance. No associations were                         lying dimensions or archetypes. Potentially, these provide a way to
found among the culture archetypes and either ROE or EBITDA, which                        understand and integrate the proliferation of constructs that currently
may account for why previous studies haven’t found associations be­                       characterize research on organizational culture and may make it easier
tween organizational culture and these measures of firm performance.                      for the results of future studies to be aggregated.




                                                                                      5
C. O’Reilly et al.                                                                                                    Journal of Business Research 182 (2024) 114780




                                Fig. 1. Model of Cultural Archetypes and Firm Performance Based on the Results from the Analysis.


5.1. Theoretical implications                                                       Overall, the results here help integrate these findings and suggest that
                                                                                    organizational culture can be parsimoniously represented by three ar­
    Organizational culture is a central phenomenon in organizational                chetypes, and that these three are associated in sensible ways to a set of
theory. Consistent with Schein’s model (2010), a sizeable number of                 objective indicators of organizational performance.
studies have conceptualized culture as norms and values (e.g., Gorton                   The three cultural archetypes identified here suggest that the larger
et al., 2021; Hongyi & Van den Steen, 2021; Morris, Hong, Chiu, & Liu,              set of norms that might define an organizational culture can be thought
2015). However, because there has been no integrative framework for                 of as promoting behaviors that promote external adaptation and drive
thinking about what norms and values might be most important for                    performance (e.g., execution, agility, performance), facilitate internal
organizational performance, there has been a proliferation of constructs            coordination, and provide for a common identity (e.g., integrity, respect,
and measures which have constrained our ability to advance an inte­                 diversity), and those that encourage an external focus (e.g., customer-
grative theory of organizational culture. Absent a common definition of             oriented). These three archetypes appear to capture what several
the organizational culture construct, it will be exceedingly difficult to           earlier culture instruments are measuring. For instance, the Competing
aggregate results across studies and we will have an increasing number              Values Framework (Cameron et al., 2006) assesses the extent to which
of studies of “culture” that are not comparable. Our results suggest that           an organizational culture is externally focused (e.g., agility, perfor­
the norms that define an organization’s culture, assessed in a variety of           mance) or internally focused (e.g., collaboration). Similarly, the DOCS
ways, can be usefully summarized as those promoting a performance-                  instrument (Denison, 1990) captures these internal versus external ori­
orientation, people and a customer-orientation.                                     entations (e.g., mission and involvement).
    This finding is consistent with a number of studies that have begun to              These results are also consistent with theories of cultural evolution
converge on a common set of norms that seem to describe the broad                   (Boyd & Richerson, 2005). From an evolutionary perspective, culture is
domain of organizational culture that applies across firms and in­                  proposed to help groups (and organizations) survive by promoting both
dustries. These appear to be captured by the nine norms/values assessed             external and internal adaptation (Brahm & Poblete, 2022; Schein,
in the Sull et al. (2019) measures. For example, although often using               2010). Norms emerge from social learning within and across groups and
different labels, studies by Tsui, Zhang, Wang, Xin, and Wu (2006),                 can result in the accumulation of adaptive traits. Thus, the norms that
Hogan and Coote (2014), Li et al. (2021), Hartnell et al. (2016),                   define an organization’s culture are one important way that an organi­
Chapman, Reeves, and Chapin (2018), Lee and Yu (2004), and Chatman                  zation can deal with the fundamental challenge of a changing environ­
et al. (2014) also identify norms such as innovation, integrity, cus­               ment. Brahm and Poblete (2022) note that this “adaptation is performed
tomers, collaboration and performance. These results are also consistent            by using several cultural levers – beliefs, knowledge, norms, and
with Hartnell et al. (2016) who attempted to summarize previous                     behavior – all of which capture the richness and variety of extant culture
research on organizational culture and argued that there are two                    research in a parsimonious way” (p. 22). The cultural archetypes we
“metathemes” that can characterize this previous research—task-ori­                 have identified include norms that are likely to promote the external
ented (outcome-oriented and aggressiveness) and relationship-oriented               adaptation (customer-orientation and performance-orientation) and
(collaboration and people-oriented). These two “metathemes” map                     internal adjustment (people-orientation) functions proposed in evolu­
directly onto the archetypes of people and performance-orientation.                 tionary theory—and do this in an efficient way.

                                                                                6
C. O’Reilly et al.                                                                                                    Journal of Business Research 182 (2024) 114780


5.2. Managerial implications                                                       predicted subsequent net income growth. Other qualitative accounts of
                                                                                   strong culture companies like Southwest Airlines, Nordstrom, Netflix
    These results also have several implications for management. First,            and Amazon also show how the early development of a strong, strate­
and not surprising, an organizational culture that emphasizes perfor­              gically aligned culture can precede subsequent success (e.g., Bryar &
mance-orientation (norms promoting execution, innovation, agility,                 Carr, 2021; Gittell, 2003; Hastings & Meyer, 2020; Spector & McCarthy,
performance and collaboration) is associated with higher revenue                   2012). Based on this evidence, we believe that organizational culture
growth. These are norms that are likely to promote internal coordina­              may be less variable and slower to change than firm performance. Thus,
tion, expedite change, reduce inefficiencies, and facilitate increased             while it is possible that sustained organizational performance (positive
sales. Second, these organizational cultures appear to be recognized by            or negative) could affect culture, it seems more likely that organizational
the market such that the market-to-book value of the firm is higher,               culture will precede performance.
suggesting that the stock market values firms with a performance-                      Similarly, while a strength of this study is the use of a large cross-
oriented culture. Interestingly, there were no significant associations            organization sample, a potential weakness is the reliance on natural
between organization culture and a firm’s return on equity (ROE) or                language algorithms for the measurement of organizational culture.
EBITDA. These effects may have been diminished because both these                  While the use of such techniques has been recommended to solve the
measures can be affected by internal accounting decisions and can vary             small sample size problem that has limited previous research on culture
systematically across industries such that the industry, CEO tenure, and           (Chatman & O’Reilly, 2016), these measures are new, and their vali­
size control variables may have diminished their importance. In                    dation is incomplete. Additional research is needed to fully validate
contrast, revenue growth and Tobin’s Q appear to be more directly                  these measures.
reflective of organizational culture.
    Second, although an organizational culture that emphasizes people              5.4. Implications for future research
(norms for diversity, respect, and integrity) was not related to measures
of objective firm performance, previous research has shown that these                  Any association between organizational culture and firm perfor­
norms can have important effects on employee outcomes such as satis­               mance is likely to be complicated. By using a large sample of firms and
faction commitment, and intention to remain. A strong people-oriented              controlling for the effects of industry, firm size and CEO tenure, these
culture can, in turn, lead to firm performance (e.g., Hartnell, Ou, Kinicki,       results confirm the importance of organizational culture for firm per­
Choi, & Karam, 2019). Norms that promote inclusivity, motivation, and              formance and also help clarify some of the confusion inherent in pre­
high ethical standards are also consistent with previous studies showing           vious studies that were unable to account for exogenous effects. For
that firms ranked higher as a great place to work perform better than              example, in exploring the association of organizational culture and firm
those ranked lower (Fulmer, Gerhart, & Scott, 2003; Sum, 2012). These              performance (asset growth) Gordon and DiTomaso (1992) used data
norms may signal to the market that a focus on human capital has po­               from 11 insurance companies and presented only correlational results
tential long-term payoffs such that investors are willing to value these           with no ability to control for firm size or CEO tenure. Using a larger
firms more highly (Riley, Michael, & Mahoney, 2016; Vomberg, Hom­                  sample, Denison and Mishra (1995) report correlations between their
burg, & Bornemann, 2015).                                                          four cultural typology categories (involvement, consistency, adapt­
    Finally, the negative association between an organizational culture            ability and mission) and firm ROA, but also never control for industry or
that is customer-oriented and analysts’ buy recommendations is some­               firm size, important moderators of this financial metric. Other studies
what puzzling but may reflect an increased emphasis by investors on                suffer from similar concerns (e.g., Calori & Sarnin, 1991; Ogbonna &
short-term performance (Cremers, Pareek, & Sautner, 2020). Analysts                Harris, 2002; Xenikou & Simosi, 2006). Our results show that organi­
are legitimate and important intermediaries of a firm’s market value.              zational culture archetypes can be important in enhancing internal
They collect and disseminate large amounts of information that inform              effectiveness (revenue growth) and as a signal to the larger market
investors’ decisions (Brown, Call, Clement, & Sharp, 2015; Chung & Jo,             (Tobin’s Q).
1996). Since the majority of stock market investors have a short-term                  Since organizational performance is dependent on a large number of
interest, information that indicates that a firm has a culture that is             exogenous factors that vary by firm (e.g., strategy, CEO quality and
significantly customer-oriented may be interpreted by analysts and in­             tenure, size) and by context (e.g., industry, economic conditions,
vestors as having less concern with short-term performance. Although               exogenous shocks), future research needs to be precise in controlling for
speculative, this may account for the negative association between                 these variables. For example, the recent pandemic has negatively
customer-orientation and analysts’ buy recommendations. Consistent                 impacted firms in industries like transportation and hospitality and
with this interpretation, an examination of the raw data revealed that             positively advantaged those in industries like technology and logistics.
those firms with the highest scores on customer-orientation also often             Even within an industry like retail, firms that rely on in-store sales have
prioritized employee well-being over shareholders.                                 been hurt while those with on-line sales have been helped. Future
                                                                                   studies linking organizational culture to firm outcomes need to carefully
5.3. Study limitations                                                             control for exogenous factors like these.
                                                                                       Similarly, an organizational culture that is useful for a particular
    Our study has several important limitations. Although we provide               strategy (e.g., one that prizes efficiency and low cost) may be disad­
evidence for the association of organizational culture archetypes and              vantageous for a different strategy (e.g., one that emphasizes innova­
objective firm performance, the results presented here are cross-                  tion). In the former, performance norms that emphasize execution and
sectional and thus provide no direct evidence for causal links. Our                attention to detail may be associated with success while in the latter,
model assumes that culture precedes performance, but it is also possible           performance norms around speed and risk taking may be required.
that organizational performance might, over time, shape organizational             These contextual factors can make any measure of financial performance
culture. Since our data cover a brief five-year window, we cannot rule             noisy. Many earlier studies that relied on idiosyncratic measures of
out this possibility. However, there is some evidence that culture pre­            organizational culture (e.g., adhocracy) or a unidimensional measure of
cedes organizational performance. For instance, in a longitudinal study            financial performance (e.g., ROA) did not control for either endogenous
of culture and performance, Boyce and his colleagues (Boyce, Nieminen,             or exogenous factors that might affect performance raising questions
Gillespie, Ryan, & Denison, 2015) used a cross-lagged panel analysis and           about the generalizability of any results—positive or negative.
showed that over a six-year period that culture preceded ratings of                    Thus, we see our findings linking cultural archetypes to firm per­
customer satisfaction and sales growth. Kotter and Heskett (1992) also             formance as basically conservative and expect more fine-grained studies
reported that cultures that were strategically aligned and adaptive                might find stronger effects. Future research might focus on how the

                                                                               7
C. O’Reilly et al.                                                                                                                          Journal of Business Research 182 (2024) 114780


three archetypes express themselves in different industries and with                            Brown, L. D., Call, A. C., Clement, M. B., & Sharp, N. Y. (2015). Inside the “black box” of
                                                                                                    sell-side financial analysts. Journal of Accounting Research, 53, 1–47.
different strategies. For example, it may be that under some circum­
                                                                                                Bryar, C., & Carr, B. (2021). Working backwards: Insights, stories and secrets from Amazon.
stances it is the interactions among the three archetypes that may be                               New York: St. Martin’s Press.
important in predicting performance. An emphasis on performance                                 Calori, R., & Sarnin, P. (1991). Corporate culture and economic performance: A French
alone and not customers or people may be less effective than an orga­                               study. Organization Studies, 12, 49–74.
                                                                                                Cameron, K. S., Quinn, R. E., DeGraff, J., & Thakor, A. V. (2006). Competing values
nizational culture that emphasizes both people and performance or all                               leadership: Creating value in organizations. London: Edward Elgar.
three. The finding that an emphasis on customers is negatively associ­                          Campos-Blasquez, J. R., Rubio-Andrada, L., & Celemin-Pedroche, M. S. (2023). Voices
ated with analysts’ buy recommendations may be mitigated if the firm                                from within. To what extent can internal crowdsourcing drive a change in
                                                                                                    organizational culture? Journal of Business Research, 157, Article 113618.
also emphasizes performance.                                                                    Chapman, D. S., Reeves, P., & Chapin, M. (2018). A lexical approach to identifying
                                                                                                    dimensions of organizational culture. Frontiers in Psychology, 9. https://doi.org/
                                                                                                    10.3389/fpsyg.2018.00876
6. Conclusions
                                                                                                Chatman, J. A., Caldwell, D. F., O’Reilly, C. A., & Doerr, B. (2014). Parsing
                                                                                                    organizational culture: How the norm for adaptability influences the relationship
    Organizational culture is widely acknowledged by both scholars and                              between culture consensus and financial performance in high-technology firms.
practitioners to be a critical aspect of organizational functioning. Yet, in                        Journal of Organizational Behavior, 35, 785–808.
                                                                                                Chatman, J. A., & Jehn, K. A. (1994). Assessing the relationship between industry
spite of decades of research, we lack a unified approach to under­                                  characteristics and organizational culture: How different can you be? Academy of
standing it. If we are to make progress, we need a way to integrate the                             Management Journal, 37, 522–553.
disparate approaches. What is called for is an integrative framework that                       Chatman, J. A., & O’Reilly, C. A. (2016). Paradigm lost: Reinvigorating the study of
                                                                                                    organizational culture. Research in Organizational Behavior, 36, 199–224.
can encompass the similarities across studies. Cultural archetypes offer                        Chatman, J., & Srivastava, S. (2021). A psychologist and sociologist join strategists for
one promising way to do this. Although the five most widely used                                    breakfast: Building a framework to understand culture and its relationship to
measures of organizational culture (DOCS, OCAI, OCI, OCP, Sull) often                               strategy. Strategy Science. https://doi.org/10.1287/stsc.2021.0139
                                                                                                Chung, K. H., & Jo, H. (1996). The impact of security analysts’ monitoring and marketing
use different labels for their measures, they share important lexical                               functions on the market value of firms. Journal of Financial and Quantitative Analysis,
similarities. Just as this lexical similarity permitted the development of                          31, 493–512.
the Big 5 and helped focus research on personality, organizational cul­                         Christensen, E. W., & Gordon, G. G. (1999). An exploration of industry, culture and
                                                                                                    revenue growth. Organization Studies, 20, 397–422.
tural archetypes may do the same for research on organizational culture.                        Combs, J. G., Crook, R., & Shook, C. L. (2005). The dimensionality of organizational
Our preliminary results suggest that these can be represented by three                              performance and its implications for strategic management research. Research
cultural archetypes.                                                                                Methodology in Strategy and Management, 2, 259–286.
                                                                                                Cooke, T. A., & Rousseau, D. M. (1988). Behavioral norms and expectations: A
                                                                                                    quantitative approach to the assessment of organizational culture. Group &
CRediT authorship contribution statement                                                            Organization Studies, 13, 245–273.
                                                                                                Corritore, M., Goldberg, A., & Srivastava, S. B. (2020). Duality in diversity: How
                                                                                                    intrapersonal and interpersonal cultural heterogeneity relate to firm performance.
   Charles O’Reilly: Writing – review & editing, Writing – original                                 Administrative Science Quarterly, 65, 359–394.
draft, Conceptualization. Xubo Cao: Software, Methodology, Data                                 Cremers, M., Pareek, A., & Sautner, Z. (2020). Short-term investors, long-term
curation. Donald Sull: .                                                                            investments, and firm value: Evidence from the Russell 200 index inclusions.
                                                                                                    Management Science, 66, 4359–4919.
                                                                                                Dalio, R. (2018). Principles. Simon and Schuster.
Data availability                                                                               Den Hartog, D. N., & Verburg, R. M. (2004). High performance work systems,
                                                                                                    organizational culture, and firm effectiveness. Human Resource Management Journal,
                                                                                                    14, 55–78.
    Data will be made available on request.
                                                                                                Denison, D. R. (1990). Corporate culture and organizational effectiveness. Oxford, England:
                                                                                                    Wiley.
References                                                                                      Denison, D. R., & Mishra, A. K. (1995). Toward a theory of organizational culture and
                                                                                                    effectiveness. Organization Science, 6, 204–223.
                                                                                                Fulmer, I. S., Gerhart, B., & Scott, K. S. (2003). Are the 100 best better? An empirical
Alvesson, M. (2012). Understanding organizational culture. Thousand Oaks, CA: Sage.
                                                                                                    investigation of the relationship between being a “great place to work” and firm
Alvesson, M., & Berg, P. (1992). Corporate culture and organizational symbolism. Berlin:
                                                                                                    performance. Personnel Psychology, 56, 965–993.
     Walter de Gruyter.
                                                                                                Gibbons, R., Siegel, J., & Weber, R. A. (2021). Strategy meets culture (for breakfast):
Alvesson, M., & Blom, M. (2022). The hegemonic ambiguity of big concepts in
                                                                                                    Understanding the relationship and highlighting its potential. Strategy Science, 6,
     organizational studies. Human Relations, 75, 58–86.
                                                                                                    111–118.
Asif, F. (2011). Estimating the impact of Denison’s 1996, “What is the difference between
                                                                                                Giberson, T. R., Resick, C. J., Dickson, M. W., Mitchelson, J. K., Randall, K. R., &
     organizational culture and organizational climate? A native’s point of view on a
                                                                                                    Clark, M. A. (2009). Leadership and organizational culture: Linking CEO
     decade of paradigm wars. Journal of Business Research, 64, 454–459.
                                                                                                    characteristics to cultural values. Journal of Business Psychology, 24, 123–137.
Bainbridge, T. F., Ludeke, S. G., & Smillie, L. D. (2022). Evaluating the Big 5 as a
                                                                                                Giorgi, S. A., Lockwood, C., & Glynn, M. A. (2015). The many faces of culture: Making
     framework for commonly used psychological trait scales. Journal of Personality and
                                                                                                    sense of 30 years of research on culture in organization studies. Academy of
     Social Psychology, 122, 749–777.
                                                                                                    Management Annals, 9, 1–54.
Barley, S. R. (1986). Technology as an occasion for structuring: Evidence from
                                                                                                Gittell, J. H. (2003). The Southwest Airlines way: Using the power of relationships to achieve
     observations of CT scanners and the social order of radiology departments.
                                                                                                    high performance. New York: McGraw Hill.
     Administrative Science Quarterly, 78–108.
                                                                                                Goldberg, A., Srivastava, B., Manian, G., Monroe, W., & Potts, C. (2016). Fitting in or
Barsade, S. G., & O’Neill, O. A. (2014). What’s love got to do with it? A longitudinal
                                                                                                    standing out? The tradeoffs of structural and cultural embeddedness. American
     study of the culture of companionate love and employee and client outcomes in a
                                                                                                    Sociological Review, 81, 1190–1222.
     long-term care setting. Administrative Science Quarterly, 59, 551–598.
                                                                                                Gordon, G. G., & DiTomaso, N. (1992). Predicting corporate performance from
Berger, J., & Packard, G. (2022). Using natural language processing to understand people
                                                                                                    organizational culture. Journal of Management Studies, 29, 783–801.
     and culture. American Psychologist, 77, 525–537.
                                                                                                Gorton, G. B., Grennan, J. & Zentefis, A. K. 2021. Corporate culture. NBER Working Paper
Berson, Y., Oreg, S., & Dvir, T. (2008). CEO values, organizational culture and firm
                                                                                                    29322.
     outcomes. Journal of Organizational Behavior, 29, 615–633.
                                                                                                Greenwood, R., & Hinings, C. R. (1993). Understanding strategic change: The
Bezrukova, K., Thatcher, S. M., Jehn, K. A., & Spell, C. S. (2012). The effects of
                                                                                                    contribution of archetypes. Academy of Management Journal, 36, 1052–1081.
     alignment: Examining group faultlines, organizational cultures, and performance.
                                                                                                Gregory, B. T., Harris, S. G., Armenakis, A. A., & Shook, C. L. (2009). Organizational
     Journal of Applied Psychology, 97, 77–92.
                                                                                                    culture and effectiveness: A study of values, attitudes, and organizational outcomes.
Bocken, N. M., Short, S. W., & Evans, R. S. (2014). A literature and practice review to
                                                                                                    Journal of Business Research, 62, 673–679.
     develop sustainable business model archetypes. Journal of Cleaner Production, 65,
                                                                                                Guiso, L., Sapienza, P., & Zingales, L. (2015). The value of corporate culture. Journal of
     42–56.
                                                                                                    Financial Economics, 117, 60–76.
Boyce, A. S., Nieminen, L. G., Gillespie, M. A., Ryan, A. M., & Denison, D. R. (2015).
                                                                                                Hamann, P. M., Schiermann, F., Bellora, L., & Guenther, T. W. (2013). Exploring the
     Which comes first, organizational culture or performance? A longitudinal study of
                                                                                                    dimensions of organizational performance: A construct validity study. Organizational
     causal priority with automobile dealerships. Journal of Organizational Behavior, 36,
                                                                                                    Research Methods, 16, 67–87.
     339–359.
                                                                                                Hartnell, C. A., Kinicki, A. J., Lambert, L. S., Fugate, M., & Comer, P. D. (2016). Do
Boyd, R., & Richerson, P. J. (2005). The origin and evolution of cultures. Oxford: Oxford
                                                                                                    similarities or differences between CEO leadership and organizational culture have a
     University Press.
                                                                                                    more positive effect on firm performance? A test of competing predictions. Journal of
Brahm, F., & Poblete, J. (2022). Cultural evolution theory and organizations.
                                                                                                    Applied Psychology, 101, 846–861.
     Organization Theory, 3, 1–20.


                                                                                            8
C. O’Reilly et al.                                                                                                                            Journal of Business Research 182 (2024) 114780

Hartnell, C. A., Ou, A. Y., & Kinicki, A. (2011). Organizational culture and organizational         Riley, S. M., Michael, S. C., & Mahoney, J. T. (2016). Human capital matters: Marker
     effectiveness: A meta-analytic investigation of the competing values framework’s                    valuation of firm investments in training and the role of complementary assets.
     theoretical suppositions. Journal of Applied Psychology, 96, 677–694.                               Strategic Management Journal, 38, 1895–1914.
Hartnell, C. A., Ou, A. Y., Kinicki, A. J., Choi, S., & Karam, E. P. (2019). A meta-analytic        Rohlen, T. P. (1979). For harmony and strength: Japanese white-collar organization in
     test of organizational culture’s association with elements of an organization’s system              anthropological perspective, No. 9. Univ of California Press.
     and its relative predictive validity on organizational outcomes. Journal of Applied            Rousseau, D. M. (1990). Normative beliefs in fund raising organizations: Linking culture
     Psychology, 104, 832–850.                                                                           to organizational performance and individual responses. Group & Organization
Hastings, R., & Meyer, E. (2020). No rules rules: Netflix and the culture of reinvention. New            Studies, 15, 448–460.
     York: Penguin Press.                                                                           Sackmann, S. A. (2011). Culture and performance. In N. Ashkanasy, C. Wilderom, &
Hofstede, G. (2001). Culture’s consequences: Comparing values, behaviours, institutions, and             M. Peterson (Eds.), The handbook of organizational culture and climate (2nd ed, pp.
     organizations across nations. Thousand Oaks CA: Sage Publications.                                  188–224). Thousand Oaks, CA: Sage Publications.
Hogan, S. J., & Coote, L. V. (2014). Organizational culture, innovation, and performance:           Scaliza, J. A., Jugend, D., Jabbour, C. J., Latan, H., Armelini, F., Twigg, D., &
     A test of Schein’s model. Journal of Business Research, 67, 1609–1621.                              Andrade, D. F. (2022). Relationships among organizational culture, open innovation,
Hongyi, L., & Van den Steen, E. (2021). Birds of a feather…Enforce social norms?                         innovative ecosystems, and performance: Evidence from an emerging economy
     Interactions among culture, norms and strategy. Strategy Science. https://doi.org/                  context. Journal of Business Research, 140, 264–279.
     10.1287/stsc.2021.0129                                                                         Schein, E. H. (2010). Organizational culture and leadership (4th edition). San Francisco,
John, O. P., Naumann, L. P., & Soto, C. J. (2008). Paradigm shift to the integrative big                 CA: Jossey-Bass.
     five trait taxonomy. In O. P. John, R. W. Robins, & L. A. Pervin (Eds.), Handbook of           Smircich, L. (1983). Concepts of culture and organizational analysis. Administrative
     personality: Theory and research ((3rd ed.,, pp. 114–158). Guilford Press.                          Science Quarterly, 28, 339–358.
Jung, T., Scott, J. T., Davies, H. T. O., Bower, P., Whalley, D., McNally, R., & Mannion, R.        Sorensen, J. B. (2002). The strength of corporate culture and the reliability of firm
     (2009). Instruments for reviewing organisational culture: A review of the literature.               performance. Administrative Science Quarterly, 47, 70–91.
     Public Administration Review, 69, 1087–1096.                                                   Spector, R., & McCarthy, P. (2012). The Nordstrom way to customer service excellence. New
Kiss, A. N., Cortes, A. F., & Hermann, P. (2022). CEO proactiveness, innovation and firm                 York: John Wiley & Sons.
     performance. Leadership Quarterly, 33, Article 101545.                                         Srivastava, S. B., & Goldberg, A. (2017). Language as a window into culture. California
Kotov, R., Krueger, R. F., Watson, D., et al. (2021). The hierarchical taxonomy of                       Management Review, 60, 56–69.
     psychopathology (HiTOP): A quantitative nosology based on consensus of evidence.               Sull, D., Sull, C., & Chamberlain, A. (2019). Measuring culture in leading companies. MIT
     Annual Review of Clinical Psychology, 17, 83–108.                                                   Sloan Management Review and Glassdoor.
Kotrba, L. M., Gillespie, M. A., Schmidt, A. M., Smerek, R. E., Ritchie, S. A., &                   Sum, V. (2012). Most admired companies: Admirable performance. Journal of Applied
     Denison, D. R. (2012). Do consistent corporate cultures have better business                        Finance & Banking, 2, 191–199.
     performance? Exploring interaction effects. Human Relations, 24, 241–262.                      Tan, B. S. (2019). In search of the link between organizational culture and performance:
Kotter, J. P., & Heskett, J. L. (1992). Corporate culture and performance. New York: Free                A review from the conclusion validity perspective. Leadership & Organization
     Press.                                                                                              Development Journal, 40, 356–368.
Lee, S. K., & Yu, K. (2004). Corporate culture and organizational performance. Journal of           Tsui, A. S., Zhang, Z., Wang, H., Xin, K. R., & Wu, J. B. (2006). Unpacking the
     Managerial Psychology, 19, 340–359.                                                                 relationship between CEO leadership behavior and organizational culture. Leadership
Li, K., Mai, F., Shen, R., & Yan, X. (2021). Measuring corporate culture using machine                   Quarterly, 17, 113–137.
     learning. Review of Financial Studies, 34, 3265–3315.                                          Van der Berg, P. T., & Wilderom, C. P. (2004). Defining, measuring, and comparing
Marcoulides, G. H., & Heck, R. H. (1993). Organizational culture and performance:                        organisational cultures. Applied Psychology, 53, 570–583.
     Proposing and testing a model. Organizational Science, 4, 209–225.                             Van Maanen, J. (1975). Police socialization: A longitudinal examination of job attitudes
Martin, J., Feldman, M. S., Hatch, M. J., & Sitkin, S. B. (1983). The uniqueness paradox in              in an urban police department. Administrative Science Quarterly, 207–228.
     organizational stories. Administrative Science Quarterly, 28, 438–453.                         Vizire, S., Schiavone, S. R., & Bottesini, J. G. (2022). Credibility beyond replicability:
Miller, C. C., Washburn, N. T., & Glick, W. H. (2013). The myth of corporate                             Improving the four validities in psychological science. Current Directions in Social
     performance. Organization Science, 24, 948–964.                                                     Sciences, 31, 162–168.
Moniz, A. 2017. Inferring employees’ social media perceptions of goal-setting corporate             Vomberg, A., Homburg, C., & Bornemann, T. (2015). Talented people and strong brands:
     cultures and the link to firm value. SSRN Paper http://ssrn.com/abstract=2768091.                   The contribution of human capital and brand equity to firm value. Strategic
Morris, M. W., Hong, Y., Chiu, C., & Liu, Z. (2015). Normology: Integrating insights about               Management Journal, 36, 2122–2131.
     social norms to understand cultural dynamics. Organizational Behavior and Human                Wilderom, C. P., van den Berg, P. T., & Wiersma, U. J. (2012). A longitudinal study of the
     Decision Processes, 129, 1–13.                                                                      effects of charismatic leadership and organizational culture on objective and
Ogbonna, E., & Harris, L. C. (2002). Organizational culture: A ten-year, two-phase study                 perceived corporate performance. Leadership Quarterly, 23, 835–848.
     of change in the UK food retailing sector. Journal of Management Studies, 39,                  Wines, W. A., & Hamilton, J. B. (2009). On changing organizational cultures by injecting
     673–706.                                                                                            new ideologies: The power of stories. Journal of Business Ethics, 89, 433–447.
O’Neill, O. A., & Rothbard, N. P. (2017). Is love all you need? The effects of emotional            Xenikou, A., & Furnham, A. (1996). A correlational and factor analytic study of four
     culture, suppression, and work–family conflict on firefighter risk-taking and health.               questionnaire measures of organizational culture. Human Relations, 49, 349–371.
     Academy of Management Journal, 60, 78–108.                                                     Xenikou, A., & Simosi, M. (2006). Organizational culture and transformational
O’Reilly, C. A. (1989). Corporations, culture, and commitment: Motivation and social                     leadership as predictors of business unit performance. Journal of Managerial
     control in organizations. California Management Review, 31, 9–25.                                   Psychology, 21, 566–579.
O’Reilly, C. A., Caldwell, D. F., Chatman, J. A., & Doerr, B. (2014). The promise and               Zheng, W., Wang, B., & McLean, G. N. (2010). Linking organizational culture, strategy,
     problems of organizational culture: CEO personality, culture, and firm performance.                 and organizational effectiveness: Mediating role of knowledge management. Journal
     Group & Organization Management, 39, 595–625.                                                       of Business Research, 63, 763–771.
O’Reilly, C. A., Cao, X., & Sull, D. (2023). CEO personality: The cornerstone of
     organizational culture? Group & Organization Management, in press,. https://doi.org/
                                                                                                    Charles O’Reilly is the Frank E. Buck Professor of Management at the Graduate School of
     10.1177/10596011231176591
                                                                                                    Business at Stanford University. His research includes studies of organizational culture,
O’Reilly, C. A., & Chatman, J. A. (1996). Culture as social control: Corporations, cults,
                                                                                                    personality, leadership, innovation and change
     and commitment. Research in Organizational Behavior, 18, 157–200.
O’Reilly, C. A., Chatman, J. A., & Caldwell, D. F. (1991). People and organizational
     culture: A profile comparison approach to assessing person-organization fit. Academy           Xubo Cao is a doctoral student at the Graduate School of Business at Stanford University.
     of Management Journal, 34, 487–516.                                                            His research includes studies of organizational culture, innovation, and the use of natural
Ouchi, W. G. (1981). Theory Z: How American business can meet the Japanese challenge.               language processing and large language models.
     New York, NY: Avon Books.
Pandey, S., & Pandey, S. K. (2019). Applying natural language processing capabilities in
                                                                                                    Don Sull is a Senior Lecturer at the MIT Sloan School of Management, where he directs the
     computerized textual analysis to measure organizational culture. Organizational
                                                                                                    Strategic Agility Project and the Culture 500. He teaches courses on competitive strategy
     Research Methods, 22, 765–797.
                                                                                                    and strategy execution.
Patterson, O. (2014). Making sense of culture. Annual Review of Sociology, 40, 1–30.




                                                                                                9
