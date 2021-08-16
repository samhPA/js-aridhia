const response = {
    "code": "cord_19",
    "name": "COVID-19 Open Research Dataset",
    "id": 51,
    "created_at": "2021-04-14T14:07:03.535Z",
    "updated_at": "2021-06-24T14:48:48.476Z",
    "workflow_key": null,
    "visibility": "internal",
    "status": {
        "storage_enabled": true,
        "request_enabled": false
    },
    "catalogue": {
        "title": "COVID-19 Open Research Dataset",
        "rights": "https://ai2-semanticscholar-cord-19.s3-us-west-2.amazonaws.com/2020-03-13/COVID.DATA.LIC.AGMT.pdf",
        "creator": "Allen Institute for AI",
        "keyword": [
            "COVID-19",
            "Open Data"
        ],
        "license": "",
        "publisher": {
            "url": "https://allenai.org/",
            "name": "Allen Institute for AI"
        },
        "description": "The COVID-19 Open Research Dataset (CORD-19) is a growing resource of scientific papers on COVID-19 and related historical coronavirus research. It's curated and maintained by the Semantic Scholar team at the Allen Institute for AI to support text mining and NLP research. For more information, please see this [README](https://github.com/allenai/cord19/blob/master/README.md).\n\nIf you plan to use this dataset in your research, please refer to the [license and citation information](https://ai2-semanticscholar-cord-19.s3-us-west-2.amazonaws.com/2020-03-13/COVID.DATA.LIC.AGMT.pdf) for this data.\n\nNOTE: Instructions how to download this dataset and how to upload it to a workspace can be found in cord_19_instructions.pdf (under Attachments).\n\nFrom the [Allen Institute for AI](https://allenai.org/)",
        "versionInfo": "1",
        "contactPoint": ""
    },
    "permissions": {
        "can_update": false,
        "can_destroy": false,
        "can_change_visibility": false,
        "can_invite_user": false,
        "can_remove_user": false,
        "can_manage_perms": false,
        "can_approve": false,
        "can_attach": false,
        "can_upload_data": false,
        "can_read_audit": false
    },
    "dictionaries": [
        {
            "id": 60,
            "name": "CORD-19",
            "code": "cord_19",
            "description": "COVID-19 Open Research Dataset",
            "created_at": "2021-04-14T14:07:03.647Z",
            "updated_at": "2021-04-14T14:07:03.647Z",
            "fields": [
                {
                    "name": "cord_uid",
                    "label": "CORD UID",
                    "type": "text",
                    "constraints": "null",
                    "description": "A unique identifier to each CORD-19 paper. This is not necessarily unique per row, which is explained in the FAQs."
                },
                {
                    "name": "sha",
                    "label": "SHA",
                    "type": "text",
                    "constraints": "null",
                    "description": "The SHA1 of all PDFs associated with the CORD-19 paper. Most papers will have either zero or one value here (since we either have a PDF or we don't), but some papers will have multiple. For example, the main paper might have supplemental information saved in a separate PDF. Or we might have two separate PDF copies of the same paper. If multiple PDFs exist, their SHA1 will be semicolon-separated (e.g. '4eb6e165ee705e2ae2a24ed2d4e67da42831ff4a; d4f0247db5e916c20eae3f6d772e8572eb828236')."
                },
                {
                    "name": "source_x",
                    "label": "Source X",
                    "type": "text",
                    "constraints": "null",
                    "description": "The names of sources from which we received this paper. Also semicolon-separated. For example, 'ArXiv; Elsevier; PMC; WHO'. There should always be at least one source listed."
                },
                {
                    "name": "title",
                    "label": "Title",
                    "type": "text",
                    "constraints": "null",
                    "description": "The paper title."
                },
                {
                    "name": "doi",
                    "label": "DOI",
                    "type": "text",
                    "constraints": "null",
                    "description": "The paper DOI."
                },
                {
                    "name": "pmcid",
                    "label": "PMC ID",
                    "type": "text",
                    "constraints": "null",
                    "description": "The paper's ID on PubMed Central. Should begin with PMC followed by an integer."
                },
                {
                    "name": "pubmed_id",
                    "label": "PubMed ID",
                    "type": "text",
                    "constraints": "null",
                    "description": "The paper's ID on PubMed."
                },
                {
                    "name": "license",
                    "label": "License",
                    "type": "text",
                    "constraints": "null",
                    "description": "The most permissive license we've found associated with this paper. Possible values include: 'cc0', 'hybrid-oa', 'els-covid', 'no-cc', 'cc-by-nc-sa', 'cc-by', 'gold-oa', 'biorxiv', 'green-oa', 'bronze-oa', 'cc-by-nc', 'medrxiv', 'cc-by-nd', 'arxiv', 'unk', 'cc-by-sa', 'cc-by-nc-nd'."
                },
                {
                    "name": "abstract",
                    "label": "Abstract",
                    "type": "text",
                    "constraints": "null",
                    "description": "The paper's abstract."
                },
                {
                    "name": "publish_time",
                    "label": "Publish Time",
                    "type": "text",
                    "constraints": "null",
                    "description": "The published date of the paper. This is in yyyy-mm-dd format. Not always accurate as some publishers will denote unknown dates with future dates like yyyy-12-31."
                },
                {
                    "name": "authors",
                    "label": "Authors",
                    "type": "text",
                    "constraints": "null",
                    "description": "The authors of the paper. Each author name is in Last, First Middle format and semicolon-separated."
                },
                {
                    "name": "journal",
                    "label": "Journal",
                    "type": "text",
                    "constraints": "null",
                    "description": "The paper journal. Strings are not normalized (e.g. BMJ and British Medical Journal can both exist). Empty string if unknown."
                },
                {
                    "name": "mag_id",
                    "label": "MAGID",
                    "type": "text",
                    "constraints": "null",
                    "description": "Tthe paper as represented in the Microsoft Academic Graph. Deprecated."
                },
                {
                    "name": "who_covidence_id",
                    "label": "WHO Covidence ID",
                    "type": "text",
                    "constraints": "null",
                    "description": "The ID assigned by the WHO for this paper. Format looks like #72306."
                },
                {
                    "name": "arxiv_id",
                    "label": "arXiv ID",
                    "type": "text",
                    "constraints": "null",
                    "description": "The arXiv ID of this paper."
                },
                {
                    "name": "pdf_json_files",
                    "label": "PDF JSON files",
                    "type": "text",
                    "constraints": "null",
                    "description": "Paths from the root of the current data dump version to the parses of the paper PDFs into JSON format. Multiple paths are semicolon-separated. Example: document_parses/pdf_json/4eb6e165ee705e2ae2a24ed2d4e67da42831ff4a.json; document_parses/pdf_json/d4f0247db5e916c20eae3f6d772e8572eb828236.json."
                },
                {
                    "name": "pmc_json_files",
                    "label": "PMC JSON files",
                    "type": "text",
                    "constraints": "null",
                    "description": "Same as above, but corresponding to the full text XML files downloaded from PMC, parsed into the same JSON format as above."
                },
                {
                    "name": "url",
                    "label": "URL",
                    "type": "text",
                    "constraints": "null",
                    "description": "All URLs associated with this paper. Semicolon-separated."
                },
                {
                    "name": "s2_id",
                    "label": "S2 ID",
                    "type": "text",
                    "constraints": "null",
                    "description": "The Semantic Scholar ID for this paper. Can be used with the Semantic Scholar API (e.g. s2_id=9445722 corresponds to http://api.semanticscholar.org/corpusid:9445722)"
                }
            ],
            "lookups": {}
        }
    ]
};


function getMockResponse() {
	return response;
}

module.exports = getMockResponse;