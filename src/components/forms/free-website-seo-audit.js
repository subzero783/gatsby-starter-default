import * as React from "react"

export default function FreeWebsiteSeoAudit() {
  return (
    <>
      <div
        dangerouslySetInnerHTML={{
          __html: `
                <form method="post" class="af-form-wrapper" accept-charset="UTF-8" action="https://www.aweber.com/scripts/addlead.pl"  >
                <div style="display: none;">
                <input type="hidden" name="meta_web_form_id" value="810901570" />
                <input type="hidden" name="meta_split_id" value="" />
                <input type="hidden" name="listname" value="awlist6715733" />
                <input type="hidden" name="redirect" value="https://www.aweber.com/thankyou-coi.htm?m=text" id="redirect_2ed96e929bb4fdb0b07aa1542e5e7a42" />
    
                <input type="hidden" name="meta_adtracking" value="Free_Website_SEO_and_Traffic_Audit" />
                <input type="hidden" name="meta_message" value="1" />
                <input type="hidden" name="meta_required" value="name,email,custom Website URL" />
    
                <input type="hidden" name="meta_tooltip" value="" />
                </div>
                <div id="af-form-810901570" class="af-form"><div id="af-body-810901570" class="af-body af-standards">
                <div class="af-element">
                <label class="previewLabel" for="awf_field-116824946">Name:</label>
                <div class="af-textWrap">
                <input id="awf_field-116824946" type="text" name="name" class="text" value="" onfocus=" if (this.value == '') { this.value = ''; }" onblur="if (this.value == '') { this.value='';} " tabindex="500" />
                </div>
                <div class="af-clear"></div>
                </div><div class="af-element">
                <label class="previewLabel" for="awf_field-116824947">Email:</label>
                <div class="af-textWrap"><input class="text" id="awf_field-116824947" type="email" name="email" value="" tabindex="501" onfocus=" if (this.value == '') { this.value = ''; }" onblur="if (this.value == '') { this.value='';} " />
                </div><div class="af-clear"></div>
                </div><div class="af-element">
                <label class="previewLabel" for="awf_field-116824948">Website URL</label>
                <div class="af-textWrap"><input type="text" id="awf_field-116824948" class="text" name="custom Website URL" value="" onfocus=" if (this.value == '') { this.value = ''; }" onblur="if (this.value == '') { this.value='';} tabindex="502"/></div>
                <div class="af-clear"></div></div><div class="af-element buttonContainer">
                <input name="submit" class="submit" type="submit" value="Submit" tabindex="503" />
                <div class="af-clear"></div>
                </div><div class="af-element privacyPolicy" style="text-align: center"><p>We respect your <a title="Privacy Policy" href="https://www.aweber.com/permission.htm" target="_blank" rel="nofollow">email privacy</a></p>
                <div class="af-clear"></div>
                </div>
                </div>
                </div>
                <div style="display: none;"><img src="https://forms.aweber.com/form/displays.htm?id=HIwMnAyMrOwM" alt="" /></div>
                </form>
            `,
        }}
      />
    </>
  )
}
