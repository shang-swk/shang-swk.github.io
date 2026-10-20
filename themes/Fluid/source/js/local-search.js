/* global CONFIG */

(function() {
  var pendingSearch = null;
  // Modified from [hexo-generator-search](https://github.com/wzpan/hexo-generator-search)
  function localSearchFunc(path, searchSelector, resultSelector) {
    'use strict';
    // 0x00. environment initialization
    var $input = jQuery(searchSelector);
    var $result = jQuery(resultSelector);

    if ($input.length === 0) {
      // eslint-disable-next-line no-console
      throw Error('No element selected by the searchSelector');
    }
    if ($result.length === 0) {
      // eslint-disable-next-line no-console
      throw Error('No element selected by the resultSelector');
    }

    if (pendingSearch) pendingSearch.abort();
    $input.off('input.localSearch');
    $result.attr('aria-busy', 'true').html('<div class="m-auto text-center" role="status"><div class="spinner-border" aria-hidden="true"></div><p class="mt-2">正在加载搜索…</p></div>');

    pendingSearch = jQuery.ajax({
      // 0x01. load xml file
      url     : path,
      dataType: 'xml',
      timeout : 10000,
      success : function(xmlResponse) {
        pendingSearch = null;
        $result.removeAttr('aria-busy');
        // 0x02. parse xml file
        var dataList = jQuery('entry', xmlResponse).map(function() {
          return {
            title  : jQuery('title', this).text(),
            content: jQuery('content', this).text(),
            url    : jQuery('url', this).text()
          };
        }).get();

        if ($result.html().indexOf('list-group-item') === -1) {
          $result.html('');
        }

        $input.on('input.localSearch', function() {
          // 0x03. parse query to keywords list
          var content = $input.val();
          var resultHTML = '';
          var keywords = content.trim().toLowerCase().split(/[\s-]+/);
          $result.html('');
          if (content.trim().length <= 0) {
            return $input.removeClass('invalid').removeClass('valid');
          }
          // 0x04. perform local searching
          dataList.forEach(function(data) {
            var isMatch = true;
            if (!data.title || data.title.trim() === '') {
              data.title = 'Untitled';
            }
            var orig_data_title = data.title.trim();
            var data_title = orig_data_title.toLowerCase();
            var orig_data_content = data.content.trim().replace(/<[^>]+>/g, '');
            var data_content = orig_data_content.toLowerCase();
            var data_url = data.url;
            var index_title = -1;
            var index_content = -1;
            var first_occur = -1;
            // only match articles with not empty contents
            if (data_content !== '') {
              keywords.forEach(function(keyword, i) {
                index_title = data_title.indexOf(keyword);
                index_content = data_content.indexOf(keyword);

                if (index_title < 0 && index_content < 0) {
                  isMatch = false;
                } else {
                  if (index_content < 0) {
                    index_content = 0;
                  }
                  if (i === 0) {
                    first_occur = index_content;
                  }
                  //content_index.push({index_content:index_content, keyword_len:keyword_len});
                }
              });
            } else {
              isMatch = false;
            }
            // 0x05. show search results
            if (isMatch) {
              resultHTML += '<a href=\'' + data_url + '\' class=\'list-group-item list-group-item-action font-weight-bolder search-list-title\'>' + orig_data_title + '</a>';
              var content = orig_data_content;
              if (first_occur >= 0) {
                // cut out 100 characters
                var start = first_occur - 20;
                var end = first_occur + 80;

                if (start < 0) {
                  start = 0;
                }

                if (start === 0) {
                  end = 100;
                }

                if (end > content.length) {
                  end = content.length;
                }

                var match_content = content.substring(start, end);

                // highlight all keywords
                keywords.forEach(function(keyword) {
                  var regS = new RegExp(keyword, 'gi');
                  match_content = match_content.replace(regS, '<span class="search-word">' + keyword + '</span>');
                });

                resultHTML += '<p class=\'search-list-content\'>' + match_content + '...</p>';
              }
            }
          });
          if (resultHTML.indexOf('list-group-item') === -1) {
            return $input.addClass('invalid').removeClass('valid');
          }
          $input.addClass('valid').removeClass('invalid');
          $result.html(resultHTML);
        });
        $input.trigger('input');
      },
      error: function(_request, status) {
        pendingSearch = null;
        if (status === 'abort') return;
        $result.removeAttr('aria-busy').html('<div class="m-auto text-center"><p role="alert">搜索暂时无法加载，请检查网络后重试。</p><button type="button" class="btn btn-outline-secondary" id="local-search-retry">重新加载搜索</button></div>');
        $result.find('#local-search-retry').one('click', function() {
          localSearchFunc(path, searchSelector, resultSelector);
        });
      }
    });
  }

  function localSearchReset(searchSelector, resultSelector) {
    'use strict';
    if (pendingSearch) pendingSearch.abort();
    var $input = jQuery(searchSelector);
    var $result = jQuery(resultSelector);

    if ($input.length === 0) {
      // eslint-disable-next-line no-console
      throw Error('No element selected by the searchSelector');
    }
    if ($result.length === 0) {
      // eslint-disable-next-line no-console
      throw Error('No element selected by the resultSelector');
    }

    $input.off('input.localSearch').val('').removeClass('invalid').removeClass('valid');
    $result.removeAttr('aria-busy').html('');
  }

  var modal = jQuery('#modalSearch');
  var searchSelector = '#local-search-input';
  var resultSelector = '#local-search-result';
  modal.on('show.bs.modal', function() {
    var path = CONFIG.search_path || '/local-search.xml';
    localSearchFunc(path, searchSelector, resultSelector);
  });
  modal.on('shown.bs.modal', function() {
    jQuery('#local-search-input').focus();
  });
  modal.on('hidden.bs.modal', function() {
    localSearchReset(searchSelector, resultSelector);
  });
})();
